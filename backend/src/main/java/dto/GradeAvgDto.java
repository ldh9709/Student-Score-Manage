package dto;


import entity.GradeAvg;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GradeAvgDto {
	
	private Long gradeAvgNo;//과목 평균 번호
	
	private Long subjectNo;//과목 번호

	private Long scoreTypeNo;//시험 유형 번호
	
	private Integer gradeAvgValue;//평균 점수
	
	public static GradeAvgDto toDto(GradeAvg gradeAvg) {
		return GradeAvgDto.builder()
				.gradeAvgNo(gradeAvg.getGradeAvgNo())
				.subjectNo(gradeAvg.getSubject().getSubjectNo())
				.scoreTypeNo(gradeAvg.getScoreType().getScoreTypeNo())
				.gradeAvgValue(gradeAvg.getGradeAvgValue())
				.build();
	}
}
