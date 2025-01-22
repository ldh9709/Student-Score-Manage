package dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GradeDto {
	
	private Long scoreTypeNo;
	
	private String scoreTypeName;
	
}
