package com.cmb.services;

import com.cmb.dtos.ProductDto;
import com.cmb.dtos.mapper.OneProductByIdResponse;
import com.cmb.dtos.mapper.ProductResponse;
import com.cmb.models.Category;
import com.cmb.models.Product;
import com.cmb.models.Supplier;
import com.cmb.repositories.CategoryRepository;
import com.cmb.repositories.ProductRepository;
import com.cmb.repositories.SupplierRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductService {
    private ProductRepository productRepository;
    private CategoryRepository categoryRepository;
    private SupplierRepository supplierRepository;

    @Transactional
    public ProductDto create(ProductDto productDto) {
        Product product = new Product();
        setProductDetails(product, productDto);
        product = this.productRepository.save(product);
        return new ProductDto(product);
    }

    @Transactional
    public ProductDto update(String productId, ProductDto productDto) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        setProductDetails(product, productDto);
        product = this.productRepository.save(product);
        product = this.productRepository.save(product);
        return new ProductDto(product);
    }

    @Transactional
    public List<ProductResponse> getAllProducts() {
        return productRepository.findAll().stream().map(ProductResponse::new).collect(Collectors.toList());
    }

    @Transactional
    public void deleteProduct(String productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        this.productRepository.delete(product);
    }

    @Transactional
    public OneProductByIdResponse getProductById(String productId) {
        Product product = this.productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));
        return new OneProductByIdResponse(product);
    }

    private void setProductDetails(Product product, ProductDto productDto) {
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        product.setDescription(productDto.getDescription());
        product.setQuantityStock(productDto.getQuantityStock());

        Category category = categoryRepository.findById(productDto.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));
        product.setCategory(category);

        Supplier supplier = supplierRepository.findById(productDto.getSupplierId())
                .orElseThrow(() -> new RuntimeException("Supplier not found"));
        product.setSupplier(supplier);
    }
}
