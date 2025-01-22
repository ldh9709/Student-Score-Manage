package entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

public class GradeAvg {
	
	@Id
	@SequenceGenerator(name = "grade_avg_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "grade_avg_no_SEQ")
	@Column(name = "grade_avg_no")
	private Long gradeAvgNo;
	
	@Column(name = "grade_name")
	private String gradeAvgValue;
	
	@Column(name = "subject_no")
	private Subject subject;
	
	@Column(name = "score_type_no")
	private ScoreType scoreType;
	
}
