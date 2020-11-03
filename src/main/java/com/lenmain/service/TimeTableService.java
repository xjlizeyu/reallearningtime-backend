package com.lenmain.service;

import com.lenmain.model.Message;
import com.lenmain.model.Record;
import com.lenmain.model.User;

import java.text.ParseException;
import java.util.List;

public interface TimeTableService {


    public void fillLostData(int userId) throws ParseException;

    public Message startTiming(int userId);

    public Message stopTiming(int userId);

    public int getTodayTime(int userId);

    public void update();

    public List<Record> fetchStatistic(int userId);
}
