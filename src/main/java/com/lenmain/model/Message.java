package com.lenmain.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
//与前端交互返回操作是否成功以及错误信息
public class Message {
    private boolean isSuccess;

    private String errorMessage;
}