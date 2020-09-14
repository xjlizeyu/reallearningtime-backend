package com.lenmain.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket docket() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.any())
                .build();
    }

    public ApiInfo apiInfo() {
        Contact contact = new Contact("lenmain", "lenmain.cn", "3077175187@qq.com");
        return new ApiInfo(
                "我的api文档",
                "my api document",
                "v1.0",
                "http://lenmain.cn",
                contact,
                "Apache 2.0",
                "http://www.apach.org/licenses/LICENSE-2.0",
                new ArrayList<>()

        );
    }
}
