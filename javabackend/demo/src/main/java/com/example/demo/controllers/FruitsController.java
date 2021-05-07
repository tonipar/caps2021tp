package com.example.demo.controllers;

import java.util.List;

import com.example.demo.models.Fruit;
import com.example.demo.repositories.FruitsRepository;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class FruitsController {
    private final FruitsRepository repository;

    FruitsController(FruitsRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/Fruits")
    public List<Fruit> getFruits() {
        return this.repository.findAll();
    }

    @GetMapping("/Fruits/{id}")
    public Fruit getFruit(@PathVariable Long id) {
        return this.repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not entity with id " + id));
    }

    @PostMapping("/Fruits")
    public Fruit addFruit(@RequestBody Fruit newFruit) {
        return this.repository.save(newFruit);
    }

    @PutMapping("/Fruits/{id}")
    public Fruit replaceFruit(@RequestBody Fruit newFruit, @PathVariable Long id) {
        newFruit.setId(id);
        return this.repository.save(newFruit);
    }

    @PatchMapping("/Fruits/{id}")
    public Fruit patchFruit(@RequestBody Fruit newFruit, @PathVariable Long id) {
        Fruit oldFruit = this.getFruit(id);
        return this.repository.save(oldFruit.name(newFruit.getName() != null ? newFruit.getName() : oldFruit.getName())
                .type(newFruit.getType() != null ? newFruit.getType() : oldFruit.getType()));
    }

    @DeleteMapping("/Fruits/{id}")
    public void deleteFruit(@PathVariable Long id) {
        try {
            this.repository.deleteById(id);
        } catch (DataAccessException error) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not entity with id " + id);
        }
    }

}
