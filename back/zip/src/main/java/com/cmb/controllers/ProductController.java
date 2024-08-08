package com.cmb.controllers;

import com.cmb.dtos.ProductDto;
import com.cmb.dtos.mapper.OneProductByIdResponse;
import com.cmb.dtos.mapper.ProductResponse;
import com.cmb.services.ProductService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@AllArgsConstructor
public class ProductController {
    private ProductService productService;

    @PostMapping
    public ProductDto create(@RequestBody @Valid ProductDto productDto) {
        return this.productService.create(productDto);
    }

    @PutMapping("/{productId}")
    public ProductDto updateProduct(@PathVariable String productId, @RequestBody @Valid ProductDto productDto) {
        return productService.update(productId, productDto);
    }

    @GetMapping
    public List<ProductResponse> getAllProdutos() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public OneProductByIdResponse getProductById(@PathVariable String id) {
        return this.productService.getProductById(id);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable String productId) {
        this.productService.deleteProduct(productId);
        return ResponseEntity.noContent().build();
    }
}
