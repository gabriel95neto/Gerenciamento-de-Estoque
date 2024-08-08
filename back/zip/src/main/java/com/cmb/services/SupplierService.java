package com.cmb.services;

import com.cmb.dtos.SupplierDto;
import com.cmb.models.Supplier;
import com.cmb.repositories.SupplierRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class SupplierService {
    private SupplierRepository supplierRepository;

    public SupplierDto create(SupplierDto supplierDto) {
        Supplier supplier = new Supplier();
        supplier.setName(supplierDto.getName());

        supplier = this.supplierRepository.save(supplier);
        return new SupplierDto(supplier);
    }

    public List<SupplierDto> getAll() {
        return this.supplierRepository.findAll().stream().map(SupplierDto::new).collect(Collectors.toList());
    }
}
