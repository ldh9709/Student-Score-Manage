package dto;


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
	
	
}
