package com.app.registration.model;
import javax.persistence.*;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy =GenerationType.SEQUENCE,generator="ID")
    @SequenceGenerator(sequenceName="ID",allocationSize=1,name="ID")   
    private Long id;
    private String firstName;
    private String lastName;
    private int grade;

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public Student(Long id, String firstName, String lastName, int grade) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
	}

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

}
