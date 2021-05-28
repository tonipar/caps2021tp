package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.utils.MyOwnMath;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.utils.MyOwnList;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HelloController {

    @GetMapping("/")
    public String index() {
        return "Hello World!";
    }

    @GetMapping("/math")
    public String mathExamples() {
        MyOwnMath mom = MyOwnMath.createFromJson("{...}");
        return "PI: " + MyOwnMath.PI + " Perimeter: " + MyOwnMath.calculatePerimeter(MyOwnMath.Shape.CIRCLE, 2);
    }

    @GetMapping("/list")
    public String listExamples() {
        MyOwnList<String> stringList = new MyOwnList<>();
        MyOwnList<Integer> intList = new MyOwnList<>();
        stringList.add("Moi");
        intList.add(1);
        return "GOT " + stringList.get(0) + " AND " + intList.get(0);
    }

    @GetMapping("/stream")
    public String streamExamples() {
        List<String> list = new ArrayList<>();
        list.add("Venus");
        list.add("Maa");
        list.add("Mars");
        var filteredList = list.parallelStream().filter(planet -> planet.startsWith("M"))
                .map(planet -> planet.toLowerCase()).collect(Collectors.toList());

        return String.join(", ", filteredList);
    }

    @GetMapping("/streamReduce")
    public String streamReduceExamples() {
        var list = new ArrayList<String>();
        list.add("Venus");
        list.add("Maa");
        list.add("Mars");
        int totalLength = list.stream().mapToInt(planet -> planet.length()).reduce(0,
                (subTotal, planetNameLength) -> subTotal + planetNameLength);

        return "Total lenght " + totalLength;
    }

    @GetMapping("/streamWithMethodRef")
    public String streamWithMethosRefExamples() {
        var list = new ArrayList<Integer>();
        list.add(1);
        list.add(8);
        list.add(2);
        list.add(4);
        var sortedList = list.stream().sorted(Integer::compare).collect(Collectors.toList());

        return sortedList.toString();
    }

}
