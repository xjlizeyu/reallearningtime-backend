package com.lenmain.controller;

import com.lenmain.model.Message;
import com.lenmain.model.Record;
import com.lenmain.model.User;
import com.lenmain.service.TimeTableService;
import io.swagger.models.auth.In;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
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

    @PostMapping("/gettime")
    public int getTime(HttpServletRequest request) {
        Optional<User> optionalUser = Optional.ofNullable((User) (request.getSession().getAttribute("user")));
        if (optionalUser.isEmpty()) return 0;
        return timeTableService.getTodayTime(optionalUser.get().getUserId());
    }

    @PostMapping("statistic")
    public List<Integer> getStatistic(HttpServletRequest request) {
        ArrayList<Integer> list = new ArrayList<>();
        Optional<User> optionalUser = Optional.ofNullable((User) (request.getSession().getAttribute("user")));
        if (optionalUser.isEmpty()) return null;
        List<Record> statisticList = timeTableService.fetchStatistic(optionalUser.get().getUserId());
        for (Record r : statisticList) {
            list.add(r.getDuration());
        }
        return list;
    }
}
