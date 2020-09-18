package com.lenmain.service.impl;

import com.lenmain.dao.UserDao;
import com.lenmain.model.Message;
import com.lenmain.model.User;
import com.lenmain.service.PlanService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;

@Service("PlanService")
public class PlanServiceImpl implements PlanService {
    @Resource
    UserDao userDao;

    @Override
    public Message newPlan(int userId, int days, int duration) {
        User user = userDao.findById(userId);
        if (user.getPlanAmount() != -1) return new Message(false, "原来有计划");
        user.setPlanAmount(duration);
        long oneDay = 24 * 60 * 60 * 1000L;
        user.setPlanDeadline(new Date(new Date().getTime() + oneDay * days));
        return new Message(true, "");
    }

    @Override
    //删除时不改变ddl，将planamount设为-1
    public Message delete(int userId) {
        User u = userDao.findById(userId);
        if (u.getPlanAmount() == -1) return new Message(
                false, ""
        );
        u.setPlanAmount(-1);
        userDao.save(u);
        return new Message(true, "");
    }
}
