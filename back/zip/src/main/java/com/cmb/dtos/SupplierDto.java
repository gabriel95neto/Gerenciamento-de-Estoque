package com.cmb.dtos;

import com.cmb.models.Product;
import com.cmb.models.Supplier;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Set;

@Data
@AllArgsConstructor
public class SupplierDto {
    String id;
    String name;
    Set<Product> products;

    public SupplierDto(Supplier supplier) {
        this.id = supplier.getId();
        this.name = supplier.getName();
    }
}
