package com.osu.backend.model;

import jakarta.persistence.*;


@Entity
@Table(name = "product_types")
public class ProductTypes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProductTypes() {
    }
    public ProductTypes(Long id) {
        this.id = id;

    }

}
