package com.osu.backend.model;

import jakarta.persistence.*;


@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @OneToMany
//    @JoinColumn(name="id_product_types")
//    private Set<ProductTypes> productTypes;

    @ManyToOne
    @JoinColumn(name = "id_product_types")
    public ProductTypes id_product_types;

//    @ManyToOne
//    @JoinColumn(name = "name_product_types")
//    public ProductTypes name_product_types;
//
//    public ProductTypes getName_product_types() {
//        return name_product_types;
//    }
//
//    public void setName_product_types(ProductTypes name_product_types) {
//        this.name_product_types = name_product_types;
//    }
//    Product() {}
//
//    public Product(Long id, String name, ProductTypes productTypes1){
//        this.id = id;
//        this.name = name;
//        this.id_product_types = productTypes1;
//    }

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

//    public Set<ProductTypes> getProductTypes() {
//        return productTypes;
//    }
//
//    public void setProductTypes(Set<ProductTypes> productTypes) {
//        this.productTypes = productTypes;
//    }

    public ProductTypes getId_product_types() {
        return id_product_types;
    }

    public void setId_product_types(ProductTypes id_product_types) {
        this.id_product_types = id_product_types;
    }
}
