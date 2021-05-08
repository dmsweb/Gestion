<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\PermissionRepository")
 */
class Permission
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $dateDu;

    /**
     * @ORM\Column(type="date")
     */
    private $audate;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $motif;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Employe", inversedBy="permissions")
     */
    private $employe;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateDu(): ?\DateTimeInterface
    {
        return $this->dateDu;
    }

    public function setDateDu(\DateTimeInterface $dateDu): self
    {
        $this->dateDu = $dateDu;

        return $this;
    }

    public function getAudate(): ?\DateTimeInterface
    {
        return $this->audate;
    }

    public function setAudate(\DateTimeInterface $audate): self
    {
        $this->audate = $audate;

        return $this;
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(string $motif): self
    {
        $this->motif = $motif;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

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
