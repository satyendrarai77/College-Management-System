package com.app.registration.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

 

@Entity  
//defining class name as Table name  
@Table(name="courses")
public class Courses {
    @Id  
    @Column  
    private int id;  
    @Column  
    private String name;  
    @Column  
    private String fees;
    public Courses() {
        super();
        // TODO Auto-generated constructor stub
    }
    public Courses(int id, String name, String fees) {
        super();
        this.id = id;
        this.name = name;
        this.fees = fees;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getFees() {
        return fees;
    }
    public void setFees(String fees) {
        this.fees = fees;
    }
    @Override
    public String toString() {
        return "Courses [id=" + id + ", name=" + name + ", fees=" + fees + "]";
    }  
    
}