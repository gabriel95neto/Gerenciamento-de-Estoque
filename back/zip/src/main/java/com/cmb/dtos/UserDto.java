package com.cmb.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserDto(String id, @NotBlank String name, @NotBlank @Email String email,@NotBlank String password) {

}