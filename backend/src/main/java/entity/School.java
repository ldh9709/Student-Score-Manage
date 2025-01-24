package entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

public class School {
	
	@Id
	@SequenceGenerator(name = "school_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "school_no_SEQ")
	@Column(name = "school_no")
	private Long schoolNo;
	
	@Column(name = "school_name")
	private String schoolName;
	
}
