package com.lenmain.dao;

import com.lenmain.model.Record;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeTableDao {
    //由于当天计时时，每次查询只需要当天记录即可，因此取最新记录
    public Record findFirstByOrderByUserId(int userId);

    public void save(Record record);
}
