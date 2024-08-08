package com.cmb.dtos;

import com.cmb.models.Category;
import com.cmb.models.Product;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
public class CategoryDto {
    String id;
    String name;
    Set<ProductDto> products;

    public CategoryDto(Category category) {
        this.id = category.getId();
        this.name = category.getName();
    }
}