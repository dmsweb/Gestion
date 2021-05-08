<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiProperty;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *   normalizationContext={"groups"={"read"}},
 *   denormalizationContext={"groups"={"write"}},
 * )
 * @ORM\Entity(repositoryClass="App\Repository\EmployeRepository")
 */
class Employe
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"read","write"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read"})
     */
    private $matricule;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read","write"})
     */
    private $noms;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read","write"})
     */
    private $naissance;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read","write"})
     */
    private $adresse;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read","write"})
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read","write"})
     */
    private $cin;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read","write"})
     */
    private $genre;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read","write"})
     */
    private $sfamiliale;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"read","write"})
     */
    private $dateRecrut;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"read","write"})
     */
    private $dateEmbauche;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="employes")
     * @Groups({"read","write"})
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Fonction", inversedBy="employes")
     * @Groups({"read","write"})
     */
    private $fonction;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Service", inversedBy="employes")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"read","write"})
     */
    private $service;

    /**
     * @var Images|null
     *
     * @ORM\ManyToOne(targetEntity=Images::class)
     * @ORM\JoinColumn(nullable=true)
     * @ApiProperty(iri="http://schema.org/image")
     * @Groups({"read","write"})
     */
    public $images;


    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Conge", mappedBy="employe")
     */
    private $conges;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Permission", mappedBy="employe")
     */
    private $permissions;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Contrat", mappedBy="employe", cascade={"persist", "remove"})
     */
    private $contrat;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Bsalaire", mappedBy="employe")
     */
    private $bsalaires;

    public function __construct()
    {
        $this->conges = new ArrayCollection();
        $this->permissions = new ArrayCollection();
        $this->bsalaires = new ArrayCollection();
        $this->service = new ArrayCollection();
        $this->fonction = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMatricule(): ?string
    {
        return $this->matricule;
    }

    public function setMatricule(string $matricule): self
    {
        $this->matricule = $matricule;

        return $this;
    }

    public function getNoms(): ?string
    {
        return $this->noms;
    }

    public function setNoms(string $noms): self
    {
        $this->noms = $noms;

        return $this;
    }

    public function getNaissance(): ?string
    {
        return $this->naissance;
    }

    public function setNaissance(string $naissance): self
    {
        $this->naissance = $naissance;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getCin(): ?string
    {
        return $this->cin;
    }

    public function setCin(string $cin): self
    {
        $this->cin = $cin;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function setGenre(string $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

    public function getSfamiliale(): ?string
    {
        return $this->sfamiliale;
    }

    public function setSfamiliale(string $sfamiliale): self
    {
        $this->sfamiliale = $sfamiliale;

        return $this;
    }

    public function getDateRecrut(): ?\DateTimeInterface
    {
        return $this->dateRecrut;
    }

    public function setDateRecrut(\DateTimeInterface $dateRecrut): self
    {
        $this->dateRecrut = $dateRecrut;

        return $this;
    }

    public function getDateEmbauche(): ?\DateTimeInterface
    {
        return $this->dateEmbauche;
    }

    public function setDateEmbauche(?\DateTimeInterface $dateEmbauche): self
    {
        $this->dateEmbauche = $dateEmbauche;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getFonction(): ?Fonction
    {
        return $this->fonction;
    }

    public function setFonction(?Fonction $fonction): self
    {
        $this->fonction = $fonction;

        return $this;
    }

    public function getService(): ?Service
    {
        return $this->service;
    }

    public function setService(?Service $service): self
    {
        $this->service = $service;

        return $this;
    }

    /**
     * @return Collection|Conge[]
     */
    public function getConges(): Collection
    {
        return $this->conges;
    }

    public function addConge(Conge $conge): self
    {
        if (!$this->conges->contains($conge)) {
            $this->conges[] = $conge;
            $conge->setEmploye($this);
        }

        return $this;
    }

    public function removeConge(Conge $conge): self
    {
        if ($this->conges->contains($conge)) {
            $this->conges->removeElement($conge);
            // set the owning side to null (unless already changed)
            if ($conge->getEmploye() === $this) {
                $conge->setEmploye(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Permission[]
     */
    public function getPermissions(): Collection
    {
        return $this->permissions;
    }

    public function addPermission(Permission $permission): self
    {
        if (!$this->permissions->contains($permission)) {
            $this->permissions[] = $permission;
            $permission->setEmploye($this);
        }

        return $this;
    }

    public function removePermission(Permission $permission): self
    {
        if ($this->permissions->contains($permission)) {
            $this->permissions->removeElement($permission);
            // set the owning side to null (unless already changed)
            if ($permission->getEmploye() === $this) {
                $permission->setEmploye(null);
            }
        }

        return $this;
    }

    public function getContrat(): ?Contrat
    {
        return $this->contrat;
    }

    public function setContrat(?Contrat $contrat): self
    {
        $this->contrat = $contrat;

        // set (or unset) the owning side of the relation if necessary
        $newEmploye = null === $contrat ? null : $this;
        if ($contrat->getEmploye() !== $newEmploye) {
            $contrat->setEmploye($newEmploye);
        }

        return $this;
    }

    /**
     * @return Collection|Bsalaire[]
     */
    public function getBsalaires(): Collection
    {
        return $this->bsalaires;
    }

    public function addBsalaire(Bsalaire $bsalaire): self
    {
        if (!$this->bsalaires->contains($bsalaire)) {
            $this->bsalaires[] = $bsalaire;
            $bsalaire->setEmploye($this);
        }

        return $this;
    }

    public function removeBsalaire(Bsalaire $bsalaire): self
    {
        if ($this->bsalaires->contains($bsalaire)) {
            $this->bsalaires->removeElement($bsalaire);
            // set the owning side to null (unless already changed)
            if ($bsalaire->getEmploye() === $this) {
                $bsalaire->setEmploye(null);
            }
        }

        return $this;
    }
}
