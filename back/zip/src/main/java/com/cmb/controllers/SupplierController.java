package com.cmb.controllers;

import com.cmb.dtos.SupplierDto;
import com.cmb.services.SupplierService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supplier")
@AllArgsConstructor
public class SupplierController {

    private SupplierService supplierService;

    @PostMapping
    public SupplierDto create(@RequestBody  SupplierDto supplierDto) {
        return this.supplierService.create(supplierDto);
    }

    @GetMapping
    public List<SupplierDto> getAll() {
        return this.supplierService.getAll();
    }
}
