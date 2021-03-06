<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Employe;
use App\Entity\Profile;
use App\Entity\Service;
use App\Entity\Fonction;
use App\Repository\UserRepository;
use App\Repository\EmployeRepository;
use App\Repository\ServiceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;


/**
 * @Route("/api")
 */
class EmployerController extends AbstractController
{
    private $tokenStorage;
    public function __construct(TokenStorageInterface $tokenStorage, EntityManagerInterface $entityManager)
    {
        $this->tokenStorage = $tokenStorage;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/Employer", name="employer", methods={"POST"})
     */
    public function AjouterEmployer(Request $request, EntityManagerInterface $entityManager, UserPasswordEncoderInterface $userPasswordEncoder, UserRepository $repoUser, ServiceRepository $ripoService)
    {
        $value= json_decode($request->getContent());
        if (isset($value->noms,$value->naissance,$value->adresse,$value->telephone,$value->cin,$value->genre,$value->sfamiliale,$value->service,$value->user,$value->nomFonction))
         {
            $daterecrut= new \DateTime();
            $dateEmb=    new  \DateTime();
            $service= new Service();
         
            ## User
            $user=    new User();
            $roleRepo= $value->user;
            $role= $repoUser->find($roleRepo);
            
           
                  
            #La longueur total du matricule = 8 ex =CSTP00001

            $annes=Date('y');
            $kods = rand(1000, 9999);
            $num= "CSTP";
           
            $matricule = $num.$kods;
          
             # les donn??es de l'employ??
             $employe= new Employe();
             
             $fonction= new Fonction();

            $reposService=$value->service;
            $service=$ripoService ->find($reposService);
            


             $fonction->setNomFonction($value->nomFonction);
             $fonction->setService($service);
             $entityManager->persist($fonction);
             $entityManager->flush();
            // dd($service);

            $employe->setMatricule($matricule);
            $employe->setNoms($value->noms);
            $employe->setNaissance($value->naissance);
            $employe->setAdresse($value->adresse);
            $employe->setTelephone($value->telephone);
            $employe->setCin($value->cin);
            $employe->setGenre($value->genre);
            $employe->setSfamiliale($value->sfamiliale);
            $employe->setUser($role);
            $employe->setService($service);
            $employe->setDateRecrut($daterecrut);
            $employe->setDateEmbauche($dateEmb);
            $employe->setFonction($fonction);

            $entityManager->persist($employe);
            $entityManager->flush();
            // dd($employe);


            $data = [
                'status' => 201,
                'message' => 'employe est bien cree: '
            ];
            return new JsonResponse($data, 201); 
        }else
        $data = [
            'status' => 500,
            'message' => 'Vous devez renseigner tous les champs ?'
        ];
        return new JsonResponse($data, 500);
        
    }

    /**
    * @Route("/employes/{id}", name="listes", methods={"DELETE"})
    */
    public function deleteUser($id)
    {
        $data = [
            'status' => 201,
            'message' => 'Utilisateur supprime  !!!'
            ];

        $delete= $this->getDoctrine()->getRepository(Employe::class)->findOneById($id);
       
        if ($delete) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($delete);
            $em->flush();
        }

        return $this->json($data, 200);
    }


              ### c'est l'affichage des employers 

    /**
    * @Route("/listeEmployes", name="listeemploye", methods={"GET"})
    */
    public function listerEmploye(Request $request, EmployeRepository $ripos )
    {
            $employe= new Employe();
            
            $page = $request->query->get('page');
            if (is_null($page) || $page < 1 ) {
               $page= 1;
               
            }
            $limite=5;
            $list= $this->getDoctrine()->getRepository(Employe::class);
            $liste= $ripos->listerEmploye($page, $limite);

            $data= [];
            $i=0;
            $users= $this->tokenStorage->getToken()->getUser();
            $profile= $users->getRoles()[0];

            if ($profile === 'ROLE_ADMIN') 
            {
                foreach ($liste as $employe)
                {
                    if ($employe->getUser()->getProfile()->getLibelle() === 'ROLE_SECRETAIRE' ||
                        $employe->getUser()->getProfile()->getLibelle() === 'ROLE_EMPLOYE')
                        {
                        $data[$i]=$employe;
                        $i++;

                    }
                }
            }
            elseif($profile=== 'ROLE_SECRETAIRE')
            {
                foreach($liste as $employe)
                {
                    if ($employe->getUser()->getProfile()->getLibelle() === 'ROLE_EMPLOYE') 
                    {
                        $data[$i]=$employe;
                        $i++;

                    }
                }
            }
            else {
                $data = [
                    'status' => 401,
                    'message' => 'D??sol?? access non autoris?? !!!'
                    ];
                
            }
            return $this->json($data, 200);
    }
}
