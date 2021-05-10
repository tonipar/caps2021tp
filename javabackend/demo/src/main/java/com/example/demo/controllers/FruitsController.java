package com.example.demo.controllers;

import com.example.demo.models.Fruit;
import com.example.demo.repositories.FruitsRepository;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/Fruits")
public class FruitsController extends CrudController<Fruit, FruitsRepository> {

    FruitsController(FruitsRepository repository) {
        super(repository);
    }

    @PatchMapping("/{id}")
    public Fruit patch(@RequestBody Fruit newEntity, @PathVariable Long id) {
        Fruit oldEntity = this.getOne(id);
        if (newEntity.getName() != null) {
            oldEntity.setName(newEntity.getName());
        }
        if (newEntity.getType() != null) {
            oldEntity.setType(newEntity.getType());
        }
        return this.repository.save(oldEntity);
    }
}
