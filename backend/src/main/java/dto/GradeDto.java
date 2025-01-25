package dto;


import entity.Grade;
import entity.Subject;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GradeDto {
	
	private Long gradeNo;
	
	private String gradeName;
	
    public static GradeDto toDto(Grade grade) {
        return GradeDto.builder()
        		.gradeNo(grade.getGradeNo())
        		.gradeName(grade.getGradeName())
                .build();
    }
}
