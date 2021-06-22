<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Controller\SecurityController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Authentication\AuthenticationManagerInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;


class SecurityController extends AbstractController

/**
 * @Route("/api")
 */

{
    private $tokenStorage;
    public function __construct(TokenStorageInterface $tokenStorage)
    {
        $this->tokenStorage = $tokenStorage;
        
    }
     
    public function register(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $em = $this->getDoctrine()->getManager();

        $username = $request->request->get('username');
        $password = $request->request->get('password');
        $roles = $request->request->get('roles');

        if (!$roles) {
            $roles = json_encode([]);
        }

        $user = new User($username);
        $user->setPassword($encoder->encodePassword($user, $password));
        $user->setRoles(($roles));
        $em->persist($user);
        $em->flush();

        return new Response(sprintf('User %s successfully created', $user->getUsername()));
    }

     /**
     * @Route("/users", name="affiches", methods={"GET"})
     */
   public function afficheUser(UserRepository $ripos ){

    $user= new User($ripos);

    $affiche=$ripos->findAll();

    $data= [];
    $i=0;
    $user= $this->tokenStorage->getToken()->getUser();
    $affiche=$this->getDoctrine()->getRepository(User::class);
    $affiches=$affiche->findAll();
        

    if ($user->getRoles()[0] ==='ROLE_ADMIN') {
       
        foreach ($affiches as $user)
        {
            if ($user->getProfile()->getLibelle() === 'ROLE_SECRETAIRE'||
                $user->getProfile()->getLibelle() === 'ROLE_EMPLOYE')
                {
                $data[$i]=$user;
                $i++;

            }
        }
   }  elseif($profile=== 'ROLE_SECRETAIRE')
   {
       foreach($liste as $user)
       {
           if ($user->getProfile()->getLibelle() === 'ROLE_EMPLOYE') 
           {
               $data[$i]=$user;
               $i++;

           }
       }
    }else {
        $data = [
            'status' => 401,
            'message' => 'Désolé accés non autorisé !!!'
            ];
        
    }
    return $this->json($data, 200);
    }
}
