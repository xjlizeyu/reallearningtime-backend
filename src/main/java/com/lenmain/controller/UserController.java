package com.lenmain.controller;

import com.lenmain.model.Message;
import com.lenmain.model.User;
import com.lenmain.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/signin")
    public Message userSignIn(User newUser){
        userService.SignIn(newUser);
        return new Message(true,"");
    }
    @PostMapping("/login")
    @ResponseBody
    public Message userLogIn(String userName,String password){
        User user = new User();
        user.setPassword(password);
        user.setUserName(userName);
        return userService.validateLogIn(user);
    }

    @PostMapping("/check")
    //根据service查询当前用户名是否被注册
    public boolean userNameCheck(String userName){
        return userService.nameDuplicateCheck(userName);
    }
}
