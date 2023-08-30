package com.virtualpetapi.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

        @Bean
        CommandLineRunner initDatabase(VirtualPetRepository repository) {

            return args -> {
                log.info("Preloading " + repository.save(new VirtualPet("WoofWoof", "Just another American lab living its' best life.")));
                log.info("Preloading " + repository.save(new VirtualPet("Mr.Pawz", "A very interesting English Bull terrier.")));
                log.info("Preloading " + repository.save(new VirtualPet("Fido", "A very lazy Shih Tzu who enjoys being pampered.")));
                log.info("Preloading " + repository.save(new VirtualPet("Rover", "An active Cocker Spaniel who loves belly rubs and play time.")));
            };
        }
}

