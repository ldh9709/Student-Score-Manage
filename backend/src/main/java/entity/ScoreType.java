package entity;

import java.util.ArrayList;
import java.util.List;

import dto.ScoreTypeDto;
import dto.SubjectDto;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScoreType {

	@Id
	@SequenceGenerator(name = "score_type_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "score_type_no_SEQ")
	@Column(name = "score_type_no")
	private Long scoreTypeNo;

	@Column(name = "score_type_name")
	private String scoreTypeName;

	@OneToMany(mappedBy = "student", fetch = FetchType.LAZY)
	@Builder.Default
	private List<Score> score = new ArrayList<>();

	@OneToMany(mappedBy = "student", fetch = FetchType.LAZY)
	@Builder.Default
	private List<GradeAvg> gradeAvg = new ArrayList<>();

	public static ScoreType toEntity(ScoreTypeDto scoreTypeDto) {

		return ScoreType.builder()
				.scoreTypeNo(scoreTypeDto.getScoreTypeNo())
				.scoreTypeName(scoreTypeDto.getScoreTypeName())
				.build();
	}
}
