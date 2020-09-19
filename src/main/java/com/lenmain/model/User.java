package com.lenmain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "USER")
@Table(name = "USER")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @Column(name = "USER_ID")
    private int userId;

    @Column(name = "USER_NAME")
    private String userName;

    @Column(name = "CREATE_DATE")
    private Date createDate;

    @Column(name = "ICON_URL")
    private String iconUrl;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "PLAN_DEADLINE")
    private Date planDeadline;

    @Column(name = "PLAN_AMOUNT")
    private int planAmount;

    @Column(name = "TOTAL_DURATION")
    private int totalDuration;

    @Column(name = "IS_TIMING")
    private boolean isTiming;
}
