package com.virtualpetapi.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
interface VirtualPetRepository extends CrudRepository<VirtualPet, Long> {}