package com.lenmain.service;

import com.lenmain.model.Message;
import com.lenmain.model.User;

public interface UserService {
    public Message SignIn(User newUser);

    public boolean nameDuplicateCheck(String name);

    public Message validateLogIn(User guest);

    public User getUserByUserName(String userName);
}
