package com.gearup.demo.user.repository;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.gearup.demo.user.model.User;


public interface UserRepository extends MongoRepository<User, Integer>{}
