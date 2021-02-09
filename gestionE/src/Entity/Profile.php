<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ProfileRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ProfileRepository::class)
 */
class Profile
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
    private $libelle;

    /**
     * @ORM\OneToMany(targetEntity=User::class, mappedBy="profile")
     */
    private $profile;

    public function __construct()
    {
        $this->profile = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getProfile(): Collection
    {
        return $this->profile;
    }

    public function addProfile(User $profile): self
    {
        if (!$this->profile->contains($profile)) {
            $this->profile[] = $profile;
            $profile->setProfile($this);
        }

        return $this;
    }

    public function removeProfile(User $profile): self
    {
        if ($this->profile->removeElement($profile)) {
            // set the owning side to null (unless already changed)
            if ($profile->getProfile() === $this) {
                $profile->setProfile(null);
            }
        }

        return $this;
    }
}
