package dto;


import entity.School;
import entity.Subject;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SchoolDto {
	
	private Long schoolNo;
	
	private String schoolName;
	
    public static SchoolDto toDto(School school) {
        return SchoolDto.builder()
        		.schoolNo(school.getSchoolNo())
        		.schoolName(school.getSchoolName())
                .build();
    }
}
