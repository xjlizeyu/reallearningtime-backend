package com.lenmain.dao;

import com.lenmain.model.Record;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeTableDao extends JpaRepository<Record, Integer> {
    //由于当天计时时，每次查询只需要当天记录即可，因此取最新记录
    Record findFirstByUserIdOrderByRecordIdDesc(int userId);

    Record saveAndFlush(Record record);
}
