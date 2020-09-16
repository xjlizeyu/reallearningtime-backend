package com.lenmain.service;

import com.lenmain.model.User;

public interface TimeTableService {


    public void fillLostData(int userId);

    public boolean startTiming(int userId);

    public boolean stopTiming(int userId);
}
