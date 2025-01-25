package dto;


import entity.Score;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScoreDto {
	
	private Long scoreNo;
	
	private Long studentNo;
	
	private Long subjectNo;
	
	private Long scoreTypeNo;
	
	private Integer scoreValue;
	
	private String scoreRating;
	
	public static ScoreDto toDto(Score score) {
		return ScoreDto.builder()
				.scoreNo(score.getScoreNo())
				.studentNo(score.getStudent().getStudentNo())
				.subjectNo(score.getSubject().getSubjectNo())
				.scoreTypeNo(score.getScoreType().getScoreTypeNo())
				.scoreValue(score.getScoreValue())
				.scoreRating(score.getScoreRating())
				.build();
	}
	
	
}
