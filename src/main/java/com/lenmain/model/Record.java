package com.lenmain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "TIMETABLE")
public class Record {
    @Id
    @Column(name = "record_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int recordId;

    @Column(name = "DATE")
    @Temporal(TemporalType.DATE)
    private Date date;

    @Column(name = "DURATION")
    private int Duration;

    @Column(name = "USER_ID")
    private int userId;


}
