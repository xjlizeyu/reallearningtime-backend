package com.lenmain.controller;

import com.lenmain.model.Message;
import com.lenmain.model.User;
import com.lenmain.service.TimeTableService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RequestMapping("/timing")
public class TimeTableController {
    @Resource
    TimeTableService timeTableService;

    @PostMapping("/start")
    public Message startTiming(HttpServletRequest request) {
        Optional<User> optionalUser = Optional.ofNullable((User) (request.getSession().getAttribute("user")));
        if (optionalUser.isEmpty()) return new Message(false, "未登录");
        return timeTableService.startTiming(optionalUser.get().getUserId());
    }

    @PostMapping("/stop")
    public Message stopTiming(HttpServletRequest request) {
        Optional<User> optionalUser = Optional.ofNullable((User) (request.getSession().getAttribute("user")));
        if (optionalUser.isEmpty()) return new Message(false, "未登录");
        return timeTableService.stopTiming(optionalUser.get().getUserId());
    }
}
