package com.cmb.dtos.mapper;

import com.cmb.dtos.UserDto;
import com.cmb.models.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public UserDto toDto(User user) {
        if (user == null) {
            return null;
        }
        return new UserDto(user.getId(),user.getName(),user.getEmail(), user.getPassword());
    }
}
