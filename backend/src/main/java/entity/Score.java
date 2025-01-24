package entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

public class Score {
	
	@Id
	@SequenceGenerator(name = "score_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "score_no_SEQ")
	@Column(name = "score_no")
	private Long scoreNo;
	
	@Column(name = "score_value")
	private Integer scoreValue;
	
	@Column(name = "score_rating")
	private String scoreRating;
	
	@Column(name = "student_no")
	private Student student;
	
	@Column(name = "subject_no")
	private Subject subject;
	
	@Column(name = "score_type_no")
	private ScoreType scoreType;
	
}
