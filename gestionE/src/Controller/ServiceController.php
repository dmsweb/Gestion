<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class ServiceController extends AbstractController
{

    private $tokenStorage;
    public function __construct(TokenStorageInterface $tokenStorage, EntityManagerInterface $entityManager)
    {
        $this->tokenStorage = $tokenStorage;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/service", name="service", methods={"POST"})
     */
    public function AjouterService(Resquest $request, EntityManagerInterface $entityManager )
    {
       $value= json_decode($request->getContent());
       if (isset($value->nomService, $value->idFonctiond)) 
       {
           
           
       }
    }
}
