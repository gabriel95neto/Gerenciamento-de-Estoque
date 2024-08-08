package com.cmb.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record SignupDto(@NotBlank String name, @NotBlank @Email String email, @NotBlank String password) {

}
