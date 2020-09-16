package com.lenmain.service.impl;

import com.lenmain.dao.TimeTableDao;
import com.lenmain.dao.UserDao;
import com.lenmain.model.ScheduledTask;
import com.lenmain.model.User;
import com.lenmain.service.TimeTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("TimeTableService")
public class TimeTableServiceImpl implements TimeTableService {
    @Resource
    UserDao userDao;


    @Resource
    ScheduledTask scheduledTask;


    @Override
    public boolean startTiming(int userId) {

        return false;
    }

    @Override
    //TODO：找到某个用户的最新记录，将其未登陆日期的学习时间置为0
    public void fillLostData(int userId) {

    }

    @Override
    //TODO:停止计时
    public boolean stopTiming(int userId) {
        return false;
    }
}
