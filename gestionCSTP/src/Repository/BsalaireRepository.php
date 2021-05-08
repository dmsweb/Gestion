<?php

namespace App\Repository;

use App\Entity\Bsalaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Bsalaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method Bsalaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method Bsalaire[]    findAll()
 * @method Bsalaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BsalaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Bsalaire::class);
    }

    // /**
    //  * @return Bsalaire[] Returns an array of Bsalaire objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Bsalaire
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
