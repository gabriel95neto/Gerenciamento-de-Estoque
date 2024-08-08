package com.cmb.errors;

public class ConflictError extends RuntimeException {
    public ConflictError(String message) {
        super(message);
    }
}