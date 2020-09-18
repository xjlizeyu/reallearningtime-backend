package com.lenmain.service;

import com.lenmain.model.Message;

public interface PlanService {

    Message newPlan(int userid, int days, int duration);

    Message delete(int userId);
}
