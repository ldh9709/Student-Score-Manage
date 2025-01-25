package dto;


import entity.Subject;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScoreTypeDto {
	
	private Long scoreTypeNo;
	
	private String scoreTypeName;
	
    public static ScoreTypeDto toDto(ScoreTypeDto scoreTypeDto) {
        return ScoreTypeDto.builder()
                .scoreTypeNo(scoreTypeDto.getScoreTypeNo())
                .scoreTypeName(scoreTypeDto.getScoreTypeName())
                .build();
    }
	
}
