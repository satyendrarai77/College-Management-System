package com.app.registration.service;

 

import java.util.ArrayList;
import java.util.List;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.registration.model.Courses;
import com.app.registration.repository.CoursesRepository;

 

@Service  
public class CourseService {
    @Autowired  
    CoursesRepository crepository;  
    
    public List<Courses> getCourses()   
    {  
    List<Courses>course = new ArrayList<Courses>();  
    crepository.findAll().forEach(courses1 -> course.add(courses1));  
    return course;  
    }  
    //getting a specific record by using the method findById() of CrudRepository  
    public Courses getCoursesById(int id)   
    {  
    return crepository.findById(id).get();  
    }  
    
}