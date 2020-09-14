package com.lenmain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity(name = "USER")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @Column(name = "user_id")
    private int userId;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "create_date")
    private Date createDate;

    @Column(name = "icon_url")
    private String iconUrl;

    @Column(name = "password")
    private String password;

    @Column(name = "plan_deadline")
    private String planDeadline;

    @Column(name = "plan_amount")
    private int planAmount;

    @Column(name = "total_duration")
    private int totalDuration;
}
