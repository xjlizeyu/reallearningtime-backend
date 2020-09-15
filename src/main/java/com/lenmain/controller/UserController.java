package com.lenmain.controller;

import com.lenmain.model.Message;
import com.lenmain.model.User;
import com.lenmain.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/signin")
    public Message userSignIn(User newUser) {
        userService.SignIn(newUser);
        return new Message(true, "");
    }

    @PostMapping("/login")
    @ResponseBody
    public Message userLogIn(String userName, String password, HttpServletRequest request) {
        User user = new User();
        user.setPassword(password);
        user.setUserName(userName);
        Message m = userService.validateLogIn(user);
        if (!m.isSuccess()) return m;
        request.getSession().setAttribute("user", userService.getUserByUserName(userName));
        return m;
    }

    @PostMapping("/check")
    //根据service查询当前用户名是否被注册
    public boolean userNameCheck(String userName){
        return userService.nameDuplicateCheck(userName);
    }
}
