<?php

namespace App\Controller;

use App\Entity\Conge;
use App\Entity\Employe;
use App\Entity\Permission;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;


/**
 * @Route("/api")
 */
class CongesController extends AbstractController
{
    // private $tokenStorage;
    // public function __construct(TokenStorageInterface $tokenStorage, EntityManagerInterface $entityManager)
    // {
    //     $this->tokenStorage = $tokenStorage;
    //     $this->entityManager = $entityManager;
    // }   
    // /**
    //  * @Route("/conges", name="conges", methods={"POST"})
    //  */
    // public function NouveauConge(Request $request, EntityManagerInterface $entityManager, UserPasswordEncoderInterface $userPasswordEncoder)
    // {
    //     $values= json_decode($request->getContent());
    //      if (isset($values->typeConge,$values->nbrejours,$values->employe,$values->dateFin,$values->dateReprise)) 
    //      {
    //         $nouveauConge= new Conge();
    //         $dateDebut=    new \DateTime;

    //         $RepoEmploye= $this->getDoctrine()->getRepository(Employe::class);
    //         $employe= $RepoEmploye->find($values->employe);
          

    //         $nouveauConge->setDateDebut($dateDebut);
    //         $nouveauConge->setDateFin($values->dateFin);
    //         $nouveauConge->setDateReprise($values->dateReprise);
    //         $nouveauConge->setTypeConge($values->typeConge);
    //         $nouveauConge->setNbreJours($values->nbrejours);
    //         $nouveauConge->setEmploye($employe);

    //         $entityManager->persist($nouveauConge);
    //         $entityManager->flush();

         
    //         $data = [
    //             'status' => 201,
    //             'message' => 'le nouveau Congé est bien cree: '
    //         ];
    //         return new JsonResponse($data, 201); 
    //     }else
    //     $data = [
    //         'status' => 500,
    //         'message' => 'Vous devez renseigner tous les champs ?'
    //     ];
    //     return new JsonResponse($data, 500);
        
    // }

   
}
