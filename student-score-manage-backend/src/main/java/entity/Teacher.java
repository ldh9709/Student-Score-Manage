package entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

public class Teacher {
	
	@Id
	@SequenceGenerator(name = "teacher_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "teacher_no_SEQ")
	@Column(name = "teacher_no")
	private Long teacherNo;
	
	@Column(name = "teacher_name")
	private String teacherName;
	
	@Column(name = "teacher_id")
	private String teacherId;
	
	@Column(name = "teacher_password")
	private String teacherPassword;
	
}
