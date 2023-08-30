package com.virtualpetapi.demo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class VirtualPetController {

    private final VirtualPetRepository repository;

    VirtualPetController(VirtualPetRepository repository){
        this.repository = repository;
    }


    @GetMapping("/returnAllPets")
    List<VirtualPet> all(){
        return (List<VirtualPet>) repository.findAll();
    }

    @PostMapping("/addPet")
    VirtualPet newVirtualPet(@RequestBody VirtualPet newVirtualPet){
        return repository.save(newVirtualPet);
    }

    @GetMapping("virtualpet/{id}")
    VirtualPet findOnePet(@PathVariable Long id) throws Throwable {
        return repository.findById(id).orElseThrow(() -> new VirtualPetNotFoundException(id));
    }

    @DeleteMapping("virtualpet/{id}")
    void deleteVirtualPet(@PathVariable Long id){
        repository.deleteById(id);
    }

}