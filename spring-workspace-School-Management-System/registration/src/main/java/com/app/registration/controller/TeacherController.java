package com.app.registration.controller;

import java.util.List;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.registration.model.Teacher;
import com.app.registration.service.TeacherService;

 


@RestController  
public class TeacherController {
    @Autowired  
    TeacherService service;  
    
    @GetMapping("/teacher") @CrossOrigin(origins = "http://localhost:4200") 
    private List<Teacher> getAllTeachers()   
    {  
    return service.getAllTeachers();  
    }  
    //creating a get mapping that retrieves the detail of a specific book  
    @GetMapping("/teacher/{id}")  @CrossOrigin(origins = "http://localhost:4200")
    private Teacher getTeachers(@PathVariable("id") int id)   
    {  
    return service.getTeachersById(id);  
    }  
    //creating a delete mapping that deletes a specified book  
    @DeleteMapping("/teacher/{id}")  @CrossOrigin(origins = "http://localhost:4200")
    private void deleteTeacher(@PathVariable("id") int id)   
    {  
        service.delete(id);  
    }  
    //creating post mapping that post the book detail in the database  
    @PostMapping("/teachers")  @CrossOrigin(origins = "http://localhost:4200")  
    private int saveTeacher(@RequestBody Teacher teacher) 
    {  
        service.saveOrUpdate(teacher);  
    return teacher.getId();  
    }  
    //creating put mapping that updates the book detail   
    @PutMapping("/teachers")  @CrossOrigin(origins = "http://localhost:4200")  
    private Teacher update(@RequestBody Teacher teacher)   
    {  
        service.saveOrUpdate(teacher);  
    return teacher;  
    } 
    
}