package com.cmb.services;

import com.cmb.dtos.CategoryDto;
import com.cmb.dtos.ProductDto;
import com.cmb.dtos.mapper.ProductResponse;
import com.cmb.models.Category;
import com.cmb.models.Product;
import com.cmb.repositories.CategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CategoryService {
    private CategoryRepository categoryRepository;

    public CategoryDto create(CategoryDto categoryDto) {
        Category category = new Category();
        category.setName(categoryDto.getName());

        category = this.categoryRepository.save(category);
        return new CategoryDto(category);
    }

    public List<CategoryDto> getAll() {
        return  this.categoryRepository.findAll().stream().map(CategoryDto::new).collect(Collectors.toList());
    }
}
