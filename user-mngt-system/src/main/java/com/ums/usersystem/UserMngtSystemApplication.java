package com.ums.usersystem;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableEncryptableProperties
public class UserMngtSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserMngtSystemApplication.class, args);
	}

}
