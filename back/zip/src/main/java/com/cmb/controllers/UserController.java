package com.cmb.controllers;

import com.cmb.dtos.LoginDto;
import com.cmb.dtos.SignupDto;
import com.cmb.dtos.UserDto;
import com.cmb.services.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @PostMapping("/register")
    public UserDto signup(@RequestBody @Valid SignupDto signupDto) {
        return this.userService.create(signupDto);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid LoginDto loginDto) {
        return this.userService.login(loginDto);
    }
}
