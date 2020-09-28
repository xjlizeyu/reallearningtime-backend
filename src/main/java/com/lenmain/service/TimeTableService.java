package com.lenmain.service;

import com.lenmain.model.Message;
import com.lenmain.model.User;

public interface TimeTableService {


    public void fillLostData(int userId);

    public Message startTiming(int userId);

    public Message stopTiming(int userId);

    public int getTodayTime(int userId);

    public void update();
}
