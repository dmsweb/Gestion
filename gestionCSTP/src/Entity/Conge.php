<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *   normalizationContext={"groups"={"read"}},
 *   denormalizationContext={"groups"={"write"}},
 * )
 * @ORM\Entity(repositoryClass="App\Repository\CongeRepository")
 */
class Conge
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"read","write"})
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     * @Groups({"read","write"})
     */
    private $dateDebut;

    /**
     * @ORM\Column(type="string")
     * @Groups({"read","write"})
     */
    private $dateFin;

    /**
     * @ORM\Column(type="string")
     * @Groups({"read","write"})
     */
    private $dateReprise;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read","write"})
     */
    private $typeConge;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read","write"})
     */
    private $nbrejours;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Employe", inversedBy="conges", cascade={"persist", "remove"})
     * @Groups({"read","write"})
     */
    private $employe;
    public function __construct()
    {
        $this->employe = new ArrayCollection();
       
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateDebut(): ?string
    {
        return $this->dateDebut;
    }

    public function setDateDebut(string $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?string
    {
        return $this->dateFin;
    }

    public function setDateFin(string $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getDateReprise(): ?string
    {
        return $this->dateReprise;
    }

    public function setDateReprise(string $dateReprise): self
    {
        $this->dateReprise = $dateReprise;

        return $this;
    }

    public function getTypeConge(): ?string
    {
        return $this->typeConge;
    }

    public function setTypeConge(string $typeConge): self
    {
        $this->typeConge = $typeConge;

        return $this;
    }

    public function getNbrejours(): ?string
    {
        return $this->nbrejours;
    }

    public function setNbrejours(string $nbrejours): self
    {
        $this->nbrejours = $nbrejours;

        return $this;
    }

    public function getEmploye(): ?Employe
    {
        return $this->employe;
    }

    public function setEmploye(?Employe $employe): self
    {
        $this->employe = $employe;

        return $this;
    }
}
