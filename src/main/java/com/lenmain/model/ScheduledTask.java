package com.lenmain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Data
public class ScheduledTask {
    private Date startTime;
    private boolean isTiming;

    public ScheduledTask() {
        this.startTime = new Date();
        this.isTiming = false;
    }

}
