package com.cmb.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse {
    private  String id;
    private  String name;
    private  CategoryDto category;
    private  String description;
    private  BigDecimal price;
    private  int quantityStock;
    private  SupplierDto supplier;
}
