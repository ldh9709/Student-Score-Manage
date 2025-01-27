package dto;


import entity.ScoreType;
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
	
    public static ScoreTypeDto toDto(ScoreType scoreType) {
        return ScoreTypeDto.builder()
                .scoreTypeNo(scoreType.getScoreTypeNo())
                .scoreTypeName(scoreType.getScoreTypeName())
                .build();
    }
	
}
