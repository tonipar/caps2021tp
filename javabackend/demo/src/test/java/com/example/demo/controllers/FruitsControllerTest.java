package com.example.demo.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import com.example.demo.models.Fruit;
import com.example.demo.repositories.FruitsRepository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
@WebMvcTest(FruitsController.class)
public class FruitsControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private FruitsRepository fruitsRepository;

    @Test
    public void getAll() throws Exception {

        List<Fruit> allFruits = Arrays.asList(new Fruit(1l, "banana", "caverion"));

        Mockito.when(fruitsRepository.findAll()).thenReturn(allFruits);

        mvc.perform(get("/Fruits").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
                .andExpect(jsonPath("$[0].type").value("banana")).andExpect(jsonPath("$[0].name").value("caverion"));
    }
}
