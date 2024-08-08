package com.cmb.dtos.mapper;

import com.cmb.models.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OneProductByIdResponse {
    String id;
    String name;
    String categoryId;
    String description;
    BigDecimal price;
    int quantityStock;
    String supplierId;

    public OneProductByIdResponse(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.categoryId = product.getCategory().getId();
        this.description = product.getDescription();
        this.quantityStock = product.getQuantityStock();
        this.supplierId = product.getSupplier().getId();
        this.price = product.getPrice();
    }
}
