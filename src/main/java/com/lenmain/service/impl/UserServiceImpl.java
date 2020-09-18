package com.lenmain.service.impl;

import com.lenmain.dao.UserDao;
import com.lenmain.model.Message;
import com.lenmain.model.User;
import com.lenmain.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Optional;

@Service("UserService")
public class UserServiceImpl implements UserService {
    @Resource
    UserDao userDao;

    @Override
    public Message SignIn(User newUser) {
        userDao.save(newUser);
        return new Message(true, "");
    }

    @Override
    //检查是否有相同用户名，true为找到
    public boolean nameDuplicateCheck(String name) {
        Optional<User> optionalUser = Optional.ofNullable(userDao.findByUserName(name));
        return optionalUser.isPresent();

    }

    @Override
    public Message validateLogIn(User guest) {
        if (!nameDuplicateCheck(guest.getUserName())) {
            return new Message(false, "用户名不存在，请登录");
        }
        String a = guest.getPassword();
        Optional<User> optionalUser = Optional.ofNullable(userDao.findByUserNameAndPassword(guest.getUserName(), guest.getPassword()));
        return optionalUser.isPresent() ? new Message(true, "") : new Message(false, "密码错误");
    }

    @Override
    public User getUserByUserName(String userName) {
        return userDao.findByUserName(userName);
    }

    @Override
    public User getUserByUserId(int userId) {
        return userDao.findById(userId);
    }

    @Override
    public Message userInfoUpdate(int userId, String userName, String password) {
        User user = getUserByUserId(userId);
        user.setUserName(userName);
        user.setPassword(password);
        userDao.save(user);
        return new Message(true, "");
    }
}
