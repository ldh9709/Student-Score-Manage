package entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

public class Student {
	
	@Id
	@SequenceGenerator(name = "student_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "student_no_SEQ")
	@Column(name = "student_no")
	private Long studentNo;
	
	@Column(name = "student_name")
	private String studentName;
	
	@Column(name = "student_gender")
	private String studentGender;
	
	@Column(name = "student_birthday")
	private LocalDateTime studentBirthday;
	
	@Column(name = "student_grade")
	private String studentGrade;//FK
	
	@Column(name = "student_phone")
	private String studentPhone;

	@Column(name = "student_parent_phone")
	private String studentParentPhone;
	
	@Column(name = "student_address")
	private String studentAddress;
	
	@Column(name = "student_detail_address")
	private String studentDetailAddress;
	
	@Column(name = "student_school")
	private String studentSchool;//FK
	
	@Column(name = "student_registration_date")
	private LocalDateTime studentRegistrationDate;
	
	
}
