<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Profile;
use App\Repository\UserRepository;
use App\Controller\ListeUserController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;


/**
 * @Route("/api")
 */
class ListeUserController extends AbstractController
{
    private $tokenStorage;
    public function __construct(TokenStorageInterface $tokenStorage)
    {
        $this->tokenStorage = $tokenStorage;
        
    }
     
    /**
     * @Route("/liste/users", name="users", methods={"GET"})
     */
    public function listerUser(Request $request, UserRepository $repos)
    {
        $users= new User();
        $list= $repos->findAll();
        
        $page = $request->query->get('page');
            if (is_null($page) || $page < 1 ) {
               $page= 1;
               
            }
        $limite=5;
        $list= $this->getDoctrine()->getRepository(User::class);
        $liste= $list->listerUser($page, $limite);
        

        $data= [];
        $i=0;
        $users= $this->tokenStorage->getToken()->getUser();
        $profile= $users->getRoles()[0];
        // dd($profile);

        if ($profile === 'ROLE_ADMIN') 
        {
            foreach ($liste as $user)
            {
                if ($user->getProfile()->getLibelle() === 'ROLE_SECRETAIRE'||
                    $user->getProfile()->getLibelle() === 'ROLE_EMPLOYE')
                    {
                    $data[$i]=$user;
                    $i++;

                }
            }
        }
        
        elseif($profile=== 'ROLE_SECRETAIRE')
        {
            foreach($liste as $user)
            {
                if ($user->getProfile()->getLibelle() === 'ROLE_EMPLOYE') 
                {
                    $data[$i]=$user;
                    $i++;

                }
            }
        }
        else {
            $data = [
                'status' => 401,
                'message' => 'D??sol?? acc??s non autoris?? !!!'
                ];
            
        }
        return $this->json($data, 200);
}

}

