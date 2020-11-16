package com.kouforum.register.service;

import com.kouforum.register.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserService {

    Page<User> getAllPageable(Pageable pageable);
}
