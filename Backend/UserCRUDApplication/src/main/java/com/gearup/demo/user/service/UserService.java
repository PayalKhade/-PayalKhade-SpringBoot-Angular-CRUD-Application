package com.gearup.demo.user.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;




import com.gearup.demo.user.model.User;
import com.gearup.demo.user.repository.UserRepository;




@Service
public class UserService {
@Autowired
private UserRepository userRepository;

//for POST operation
public User saveUser(User user) {
return userRepository.save(user);
}

public ResponseEntity<User> getUserById(@PathVariable int id) {
User user = userRepository.findById(id)
.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
return ResponseEntity.ok(user);
}



////GET with Pagination working 1
//public List<User> getUser(int pageNumber, int pageSize) {
//
//Pageable page= PageRequest.of(pageSize, pageNumber);
//Page<User> pagedResult=userRepository.findAll(page);
//if(pagedResult.hasContent()) {
//return pagedResult.getContent();
//}else {
//return new ArrayList<User>();
//}
//}
////GET with Pagination new proper service side 
public Page<User> getUsers(int pageNumber, int pageSize) {
// TODO Auto-generated method stub
Pageable page= PageRequest.of(pageSize,pageNumber);
return userRepository.findAll(page) ;
}

// for GET without pagination
// public List<User> getAllUser(){
// return userRepository.findAll();
// }


// update user

//public User updateUser(@PathVariable(value = "id") int id,
//@Validated @RequestBody User userDetails) throws ResourceNotFoundException {
//
//User user = userRepository.findById(id).get();
//user.setEmailId(userDetails.getEmailId());
//user.setLastName(userDetails.getLastName());
//user.setFirstName(userDetails.getFirstName());
//final User updatedUser = userRepository.save(user);
////if(updatedUser ==null) {System.err.println("No such user");return null;}
//return userRepository.save(updatedUser);
//
//
//}
public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User userDetails){
User user = userRepository.findById(id)
.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

user.setFirstName(userDetails.getFirstName());
user.setLastName(userDetails.getLastName());
user.setEmailId(userDetails.getEmailId());
user.setContactNo(userDetails.getContactNo());

User updatedUser = userRepository.save(user);
return ResponseEntity.ok(updatedUser);
}


//public User updateUser(User user) {
//	int id = user.getId();
//	User user1 = userRepository.findById(id).get();
//	user1.setFirstName(user.getFirstName());
//	user1.setLastName(user.getLastName());
//	user1.setEmailId(user.getEmailId());
//	user1.setContactNo(user.getContactNo());
//	
//	return userRepository.save(user1);
//}




public void deleteUser(Integer id){
userRepository.deleteById(id);

}



}