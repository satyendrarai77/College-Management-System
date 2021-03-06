package com.app.registration.service;





import java.util.ArrayList;
import java.util.List;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.registration.model.Teacher;
import com.app.registration.repository.TeacherRepository;

 


@Service  
public class TeacherService {

 

    @Autowired  
    TeacherRepository Repository;  
    
    
    public List<Teacher> getAllTeachers()   
    {  
    List<Teacher>teacher = new ArrayList<Teacher>();  
    Repository.findAll().forEach(teacher1 -> teacher.add(teacher1));  
    return teacher;  
    }  
    //getting a specific record by using the method findById() of CrudRepository  
    public Teacher getTeachersById(int id)   
    {  
    return Repository.findById(id).get();  
    }  
    //saving a specific record by using the method save() of CrudRepository  
    public void saveOrUpdate(Teacher books)   
    {  
        Repository.save(books);  
    }  
    //deleting a specific record by using the method deleteById() of CrudRepository  
        public void delete(int id)   
        {  
            Repository.deleteById(id);  
        }  
        
    //updating a record  
    
    public void update(Teacher teacher, int bookid)   
    {  
        Repository.save(teacher);  
    }    
    
 public Teacher saveUser(Teacher teacher) {
     teacher.setPassword(teacher.getPassword());
return Repository.save(teacher);
 }

 

}