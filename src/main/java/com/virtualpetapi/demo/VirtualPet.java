package com.virtualpetapi.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
class VirtualPet {
    private @Id
    @GeneratedValue Long id;
    private String name;
    private String description;
    private int health = 10;
    private int boredom = 0;
    private int hunger = 0;
    private int thirst = 0;

    VirtualPet() {}

    VirtualPet(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Long getId(){
        return this.id;
    }

    public String getName() {
        return this.name;
    }


    public String getDescription() {
        return this.description;
    }

    public int getHunger() {
        return this.hunger;
    }

    public int getThirst() {
        return this.thirst;
    }

    public int getBoredom() {
        return this.boredom;
    }

    public int getHealth() {
        return this.health;
    }
}