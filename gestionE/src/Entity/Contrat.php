<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContratRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ContratRepository::class)
 */
class Contrat
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $natureContrat;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNatureContrat(): ?string
    {
        return $this->natureContrat;
    }

    public function setNatureContrat(string $natureContrat): self
    {
        $this->natureContrat = $natureContrat;

        return $this;
    }
}
