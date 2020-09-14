package com.lenmain.controller;

import com.lenmain.model.Message;
import com.lenmain.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

    @PostMapping("/signin")
    public Message userSignIn(@RequestBody User newUser){
        return new Message();
    }
    @PostMapping("/login")
    public Message userLogIn(@RequestBody User guest){
        return new Message();
    }
}
