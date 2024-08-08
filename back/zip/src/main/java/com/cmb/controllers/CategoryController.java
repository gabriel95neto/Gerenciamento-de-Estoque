package com.cmb.controllers;

import com.cmb.dtos.CategoryDto;
import com.cmb.dtos.SignupDto;
import com.cmb.dtos.UserDto;
import com.cmb.services.CategoryService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@AllArgsConstructor
public class CategoryController {
    private CategoryService categoryService;

    @PostMapping
    public CategoryDto signup(@RequestBody @Valid CategoryDto categoryDto) {
        return this.categoryService.create(categoryDto);
    }

    @GetMapping
    public List<CategoryDto> getAll() {
        return this.categoryService.getAll();
    }
}
