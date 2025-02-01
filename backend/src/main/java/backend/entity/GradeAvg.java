package backend.entity;

import backend.dto.GradeAvgDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "grade_avg")
public class GradeAvg {
	
	@Id
	@SequenceGenerator(name = "grade_avg_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "grade_avg_no_SEQ")
	@Column(name = "grade_avg_no")
	private Long gradeAvgNo;
	
	@Column(name = "grade_avg_value")
	private Integer gradeAvgValue;
	
	@JoinColumn(name = "subject_no")
	@ManyToOne(fetch = FetchType.LAZY)
	private Subject subject;
	
	@JoinColumn(name = "score_type_no")
	@ManyToOne(fetch = FetchType.LAZY)
	private ScoreType scoreType;
	
	public static GradeAvg toEntity(GradeAvgDto gradeAvgDto) {
		Subject subject = Subject.builder()
				.subjectNo(gradeAvgDto.getSubjectNo())
				.build();
		
		ScoreType scoreType = ScoreType.builder()
				.scoreTypeNo(gradeAvgDto.getScoreTypeNo())
				.build();
		
		return GradeAvg.builder()
				.gradeAvgNo(gradeAvgDto.getGradeAvgNo())
				.gradeAvgValue(gradeAvgDto.getGradeAvgValue())
				.subject(subject)
				.scoreType(scoreType)
				.build();
	}
}
