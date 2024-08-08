package com.cmb.dtos.mapper;

import com.cmb.dtos.CategoryDto;
import com.cmb.dtos.SupplierDto;
import com.cmb.models.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse {

    private String id;
    private String name;
    private CategoryDto category;
    private String description;
    private BigDecimal price;
    private int quantityStock;
    private SupplierDto supplier;

    public ProductResponse(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.category = new CategoryDto(product.getCategory());
        this.description = product.getDescription();
        this.quantityStock = product.getQuantityStock();
        this.supplier = new SupplierDto(product.getSupplier());
        this.price = product.getPrice();
    }
}
