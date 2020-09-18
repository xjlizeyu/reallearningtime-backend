package com.lenmain.service.impl;

import com.lenmain.dao.TimeTableDao;
import com.lenmain.dao.UserDao;
import com.lenmain.model.Message;
import com.lenmain.model.Record;
import com.lenmain.model.ScheduledTask;
import com.lenmain.model.User;
import com.lenmain.service.TimeTableService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Optional;

@Service("TimeTableService")
public class TimeTableServiceImpl implements TimeTableService {
    @Resource
    ScheduledTask scheduledTask;
    @Resource
    TimeTableDao timeTableDao;

    @Override
    //TODO:开始计时
    public Message startTiming(int userId) {

        return new Message(true, "");
    }

    @Override
    //TODO：找到某个用户的最新记录，将其未登陆日期的学习时间置为0
    public void fillLostData(int userId) {
        Optional<Record> re = Optional.ofNullable(timeTableDao.findFirstByUserId(userId));
        //判断是否之前没有记录
        if (re.isEmpty()) {
            Record record = new Record(0, new Date(), 0, userId);
            timeTableDao.save(record);
            return;

        }

        Date d = re.get().getDate();
        Date curr = new Date();
        long oneDay = 24 * 60 * 60 * 1000L;
        while (d.after(curr)) {
            Record record = new Record(0, d, 0, userId);
            timeTableDao.save(record);
            d = new Date(d.getTime() + oneDay);
        }
    }

    @Override
    //TODO:停止计时
    public Message stopTiming(int userId) {
        scheduledTask.getCurrDuration();
        scheduledTask.setCurrDuration(0);

        return new Message(true, "");
    }

    //TODO:在一天过去后停止计时并更新今日时间
    @Scheduled(cron = "0 0 0 * * *")
    public void update() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        Optional<User> optionalUser = Optional.ofNullable((User) request.getSession().getAttribute("user"));
        if (optionalUser.isPresent()) {
            Record record = timeTableDao.findFirstByUserId(optionalUser.get().getUserId());
            record.setDuration(record.getDuration() + scheduledTask.getCurrDuration());
            scheduledTask.setCurrDuration(0);
        }
    }
}
