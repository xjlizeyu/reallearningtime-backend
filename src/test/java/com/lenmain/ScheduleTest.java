package com.lenmain;

import com.lenmain.model.ScheduledTask;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

@SpringBootTest
public class ScheduleTest {

    @Resource
    ScheduledTask scheduledTask;

    @Test
    public void test() {

    }

}
