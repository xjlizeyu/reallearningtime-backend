package com.lenmain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
//与前端交互返回操作是否成功以及错误信息
public class Message {
    private boolean isSuccess;

    //TODO：优化返回信息
    private String errorMessage;
}
