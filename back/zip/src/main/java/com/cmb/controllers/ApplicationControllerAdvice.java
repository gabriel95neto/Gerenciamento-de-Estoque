package com.cmb.controllers;

import com.cmb.errors.ConflictError;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApplicationControllerAdvice {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public List<String> hadleArgumentInvalid(MethodArgumentNotValidException ex) {
        return ex.getBindingResult().getFieldErrors().stream().map(error -> error.getField() + ": " + error.getDefaultMessage()).collect(Collectors.toList());
    }

    @ExceptionHandler(ConflictError.class)
    public ResponseEntity<String> hadleArgumentInvalid(ConflictError ex) {
        return new ResponseEntity<String>("{\"message\":\""+ex.getMessage()+"\"}", HttpStatus.CONFLICT);
    }
}
