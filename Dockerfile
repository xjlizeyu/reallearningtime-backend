#获取base image
FROM adoptopenjdk/openjdk11:ubi
#类似于执行 linux指令
RUN mkdir /app
#类似于linux copy指令
COPY target/real-learning-time-0.0.1-SNAPSHOT.jar /app/
#对外端口
EXPOSE 80
#执行命令 java -jar /opt/app/mszdqabbs-2.0.0.jar
CMD ["java", "-jar", "/app/real-learning-time-0.0.1-SNAPSHOT.jar"]
