package com.virtualpetapi.demo;

class VirtualPetNotFoundException extends RuntimeException {
    VirtualPetNotFoundException(Long id){
        super("Could not find virtual pet: " + id);
    }
}
