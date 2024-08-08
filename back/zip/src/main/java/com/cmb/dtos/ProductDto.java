package com.cmb.dtos;

import com.cmb.models.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
    String id;
    String name;
    String categoryId;
    String description;
    BigDecimal price;
    int quantityStock;
    String supplierId;

    public ProductDto(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.categoryId = product.getCategory().getName();
        this.description = product.getDescription();
        this.quantityStock = product.getQuantityStock();
        this.supplierId = product.getSupplier().getName();
        this.price = product.getPrice();
    }
}
