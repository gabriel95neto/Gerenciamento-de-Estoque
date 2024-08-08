package com.cmb.infra;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import com.cmb.models.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

@Component
public class TokenService {
    @Value("${api.security.key-secret}")
    private String secret;

    public String generateToken(User user) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(this.secret);

            return JWT.create().withIssuer("auth-service").withSubject(user.getId()).withExpiresAt(this.generateExpirationDate()).sign(algorithm);

        } catch (JWTCreationException ex) {
            throw new RuntimeException("Error while authenticate ");
        }
    }

    public String validationToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(this.secret);
            return JWT.require(algorithm).withIssuer("auth-service").build().verify(token).getSubject();
        } catch (JWTVerificationException ex) {
            return null;
        }
    }

    private Instant generateExpirationDate() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}