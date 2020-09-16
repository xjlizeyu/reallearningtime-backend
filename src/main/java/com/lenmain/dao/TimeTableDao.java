package com.lenmain.dao;

import com.lenmain.model.Record;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeTableDao {
    public Record findByUserId(int iserId);
}
