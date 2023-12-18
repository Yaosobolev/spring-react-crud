package com.osu.backend.exception;

public class ProductNotFoundException extends RuntimeException{
    public ProductNotFoundException(Long id){
        super("Товар с таким id не найден: " + id);
    }
}
