package dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GradeAvgDto {
	
	private Long gradeAvgNo;
	
	private Long subjectNo;

	private Long scoreTypeNo;
	
	private Integer gradeAvgValue;
	
}
