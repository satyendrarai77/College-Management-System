package com.app.registration.controller;

 

import java.util.List;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.app.registration.model.Courses;
import com.app.registration.service.CourseService;

 

 

@RestController  
public class CoursesController {
    @Autowired  
    CourseService service;  
    
    @GetMapping("/courses") @CrossOrigin(origins = "http://localhost:4200") 
    private List<Courses> getAllCourses()   
    {  
    return service.getCourses();  
    }  
    //creating a get mapping that retrieves the detail of a specific book  
    @GetMapping("/courses/{id}")  @CrossOrigin(origins = "http://localhost:4200")
    private Courses getCourses(@PathVariable("id") int id)   
    {  
    return service.getCoursesById(id);  
    }  
}