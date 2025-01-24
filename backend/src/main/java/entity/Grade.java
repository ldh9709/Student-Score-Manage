package entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

public class Grade {
	
	@Id
	@SequenceGenerator(name = "grade_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "grade_no_SEQ")
	@Column(name = "grade_no")
	private Long gradeNo;
	
	@Column(name = "grade_name")
	private String gradeName;
	
}
