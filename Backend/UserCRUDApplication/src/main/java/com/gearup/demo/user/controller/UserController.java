package com.gearup.demo.user.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.gearup.demo.user.model.User;
import com.gearup.demo.user.repository.UserRepository;
import com.gearup.demo.user.service.UserService;
@RestController
@CrossOrigin(allowedHeaders = "*",origins = "*")

public class UserController {
@Autowired
private UserService service; //Saving the user data



//@Bean
//public WebMvcConfigurer configure() {
//	return new WebMvcConfigurer() {
//		@Override
//		public void addCorsMappings(CorsRegistry registry) {
//			registry.addMapping("/*").allowedOrigins("http://localhost:4200");
//		}
//		
//	};
//}

@PostMapping("/addUser")
public String saveUser(@RequestBody User user) {
service.saveUser(user);
return"Hi "+user.getFirstName()+" user added";
}
//new pagination proper controller
@GetMapping("/getUsers")
Map<String,Object> getUser(@RequestParam(defaultValue="5") int pageSize,
@RequestParam (defaultValue="0")int pageNumber){
Page<User> page = service.getUsers(pageSize, pageNumber);
Map<String,Object> usermap= new HashMap<>();
usermap.put("userlist", page.getContent());
usermap.put("totalElements", page.getTotalElements());
return usermap;
}
//pagination working 1
//@GetMapping("/getUsers")
//List<User> getUser(@RequestParam(defaultValue="5") int pageSize,
//@RequestParam(defaultValue="0") int pageNumber){
//return service.getUser(pageSize, pageNumber);
//}

@GetMapping("/getUser/{id}")
public ResponseEntity<User> getUserById(@PathVariable int id){
return service.getUserById(id);
}
// @GetMapping("/user")
// public List<User> getAllUser(){
// return service.getAllUser();
//// }
//@GetMapping("/getUser/{id}")
//public Optional<User> getUserById(@PathVariable int id)
//{
//return service.getUserById(id);
//}
//@PutMapping("/users/{id}")
//public User updateUser(@PathVariable int id, @Validated @RequestBody User userDetails) {
//
//return service.updateUser(id, userDetails);
//
//}
@PutMapping("/updateUser/{id}")
public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User userDetails){
return service.updateUser(id, userDetails);
}



@DeleteMapping("/deleteUser")
public void deleteStudent(@RequestParam Integer id){
service.deleteUser(id);
}

//@PutMapping("/updateUser")
//public User updateUser(@RequestBody User user) {
//	return  service.updateUser(user);
//}
}