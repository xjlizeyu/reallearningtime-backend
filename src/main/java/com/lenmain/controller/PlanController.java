package com.lenmain.controller;

import com.lenmain.model.Message;
import com.lenmain.model.User;
import com.lenmain.service.PlanService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@RequestMapping("/plan")
public class PlanController {
    @Resource
    PlanService planService;

    @PostMapping("/new")
    public Message newPlan(HttpServletRequest request, int days, int duration) {
        int userId = ((User) request.getSession().getAttribute("user")).getUserId();
        return planService.newPlan(userId, days, duration);
    }

    @PostMapping("delete")
    public Message delete(HttpServletRequest request) {
        int userId = ((User) request.getSession().getAttribute("user")).getUserId();
        return planService.delete(userId);
    }
}
