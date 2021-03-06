package com.app.registration.model;

import javax.persistence.Column;  
import javax.persistence.Entity;  
import javax.persistence.Id;  
import javax.persistence.Table;  
//mark class as an Entity   
@Entity  
//defining class name as Table name  
@Table(name="teacher")  
public class Teacher {

 

    @Id  
    @Column  
    private int id;  
    @Column  
    private String firstname;  
    @Column  
    private String lastname;  
    @Column  
    private String email;  
    @Column  
    private String password;  
    @Column  
    private String message;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getfirstName() {
        return firstname;
    }
    public void setfirstName(String firstname) {
        this.firstname = firstname;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public Teacher() {
        super();
        // TODO Auto-generated constructor stub
    }
    public Teacher(int id, String firstname, String lastname, String email,String password) {
        super();
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password=password;
        
    }  
    public Teacher(String message) {this.message = message;}
    public String getMessage() {
        return message;
    }

 

    public void setMessage(String message) {
        this.message = message;
    }

 

    
}