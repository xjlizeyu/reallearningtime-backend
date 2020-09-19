package com.lenmain.controller;

import com.lenmain.dao.TimeTableDao;
import com.lenmain.model.Message;
import com.lenmain.model.User;
import com.lenmain.service.TimeTableService;
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

    @Resource
    private TimeTableService timeTableService;

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

        timeTableService.fillLostData(userService.getUserByUserName(userName).getUserId());
        return m;
    }

    @PostMapping("/update")
    //更改用户信息
    public Message userInfoUodate(User user) {
        return new Message(true, "");
    }

    @PostMapping("/check")
    //根据service查询当前用户名是否被注册
    public boolean userNameCheck(String userName) {
        return userService.nameDuplicateCheck(userName);
    }

    @PostMapping("/updateuserinfo")
    public Message userInfoUpdate(int userId, String userName, String password) {
        return userService.userInfoUpdate(userId, userName, password);
    }

    @PostMapping("/updateicon")
    //用户上传并更改头像，需要用到七牛云对象存储
    public Message userUpdateIcon() {
        return new Message(true, "");
    }
}
