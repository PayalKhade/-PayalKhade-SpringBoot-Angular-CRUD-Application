package com.gearup.demo.user.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



import lombok.Data;
import lombok.ToString;
@Data
@ToString



@Document(collection = "users")



public class User {
@Id
private int id;
private String firstName;
private String lastName;
private String emailId;
private String contactNo;




public User() {

}
public int getId() {
return id;
}
public void setId(int id) {
this.id = id;
}
public String getFirstName() {
return firstName;
}
public void setFirstName(String firstName) {
this.firstName = firstName;
}
public String getLastName() {
return lastName;
}
public void setLastName(String lastName) {
this.lastName = lastName;
}
public String getEmailId() {
return emailId;
}
public void setEmailId(String emailId) {
this.emailId = emailId;
}
public String getContactNo() {
return contactNo;
}
public void setContactNo(String contactNo) {
this.contactNo = contactNo;
}

}
