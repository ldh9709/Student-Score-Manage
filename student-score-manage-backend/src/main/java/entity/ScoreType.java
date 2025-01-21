package entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

public class ScoreType {
	
	@Id
	@SequenceGenerator(name = "score_type_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "score_type_no_SEQ")
	@Column(name = "score_type_no")
	private Long scoreTypeNo;
	
	@Column(name = "score_type_name")
	private String scoreTypeName;
	
}
