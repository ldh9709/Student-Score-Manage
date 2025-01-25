package entity;

import java.util.ArrayList;
import java.util.List;

import dto.GradeDto;
import dto.SubjectDto;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Grade {
	
	@Id
	@SequenceGenerator(name = "grade_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "grade_no_SEQ")
	@Column(name = "grade_no")
	private Long gradeNo;
	
	@Column(name = "grade_name")
	private String gradeName;

    public static Grade toEntity(GradeDto gradeDto) {
    	
        return Grade.builder()
        		.gradeNo(gradeDto.getGradeNo())
        		.gradeName(gradeDto.getGradeName())
                .build();
    }
}
