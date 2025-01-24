package entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

public class Subject {
	
	@Id
	@SequenceGenerator(name = "subject_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "subject_no_SEQ")
	@Column(name = "subject_no")
	private Long subjectNo;
	
	@Column(name = "subject_name")
	private String subjectName;
	
}
