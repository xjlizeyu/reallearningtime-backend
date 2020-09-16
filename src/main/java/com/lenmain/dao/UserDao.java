package com.lenmain.dao;

import com.lenmain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserDao extends JpaRepository<User,Integer> {
    User findByUserName(String userName);

    User findByUserNameAndPassword(String userName,String password);


}
