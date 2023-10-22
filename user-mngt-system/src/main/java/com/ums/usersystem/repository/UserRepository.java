package com.ums.usersystem.repository;

import com.ums.usersystem.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
//    List<UserEntity> findBySize(int size);
//    List<UserEntity> findByNameAndPassword(String name, String password);
}
