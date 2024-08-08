package com.cmb.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false, unique = true)
    @NotNull
    @Size(min = 1, max = 100)
    private String name;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(length = 500)
    private String description;

    @Column(nullable = false)
    @NotNull
    private BigDecimal price;

    @Column(nullable = false)
    @NotNull
    private int quantityStock;

    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;
}
