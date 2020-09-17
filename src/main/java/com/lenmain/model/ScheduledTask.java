package com.lenmain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@Data
public class ScheduledTask {
    private int currDuration;
    private boolean isTiming;

    public ScheduledTask() {
        this.currDuration = 0;
        this.isTiming = true;
    }

    @Scheduled(cron = "* * * * * *")
    public void schedule() {
        if (isTiming) {
            currDuration++;
            //System.out.println(currDuration);
        }
    }


}
