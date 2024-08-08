package com.cmb.services;

import com.cmb.dtos.LoginDto;
import com.cmb.dtos.SignupDto;
import com.cmb.dtos.UserDto;
import com.cmb.dtos.mapper.UserMapper;
import com.cmb.errors.ConflictError;
import com.cmb.infra.TokenService;
import com.cmb.models.User;
import com.cmb.repositories.UserRepository;
import jakarta.annotation.security.PermitAll;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private TokenService tokenService;

    public UserDto create(@Valid SignupDto userDto) {

        Optional<User> userAlready = userRepository.findByEmail(userDto.email());

        if (userAlready.isEmpty()) {
            User user = new User();
            user.setName(userDto.name());
            user.setEmail(userDto.email());
            user.setPassword(passwordEncoder.encode(userDto.password()));

            this.userRepository.save(user);
            return new UserMapper().toDto(user);
        }
        throw new ConflictError("Email is already exist");
    }

    public ResponseEntity<String> login(@Valid LoginDto loginDto) {
        User user = userRepository.findByEmail(loginDto.email()).orElseThrow(() -> new RuntimeException("User not found"));

        if(passwordEncoder.matches(loginDto.password(), user.getPassword())) {
            return new ResponseEntity<String>("{\"accessToken\":\""+this.tokenService.generateToken(user)+"\"}", HttpStatus.CREATED);
        }

        throw new RuntimeException("Inputs provided invalid");
    }
}
