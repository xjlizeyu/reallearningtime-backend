package com.lenmain;

import com.lenmain.dao.UserDao;
import com.lenmain.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DaoTest {
    @Resource
    UserDao userDao;

    @Test
    public void test(){
        List<User> userList = userDao.findAll();
        System.out.println(userList);

        System.out.println(userDao.findByUserName("test"));
    }
}
