package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.example.demo.utils.INextId;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Fruit implements INextId {
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    private String type;
    private String name;
}
