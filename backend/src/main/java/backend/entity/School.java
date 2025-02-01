package backend.entity;

import java.util.ArrayList;
import java.util.List;

import backend.dto.SchoolDto;
import backend.dto.SubjectDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "school")
public class School {
	
	@Id
	@SequenceGenerator(name = "school_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "school_no_SEQ")
	@Column(name = "school_no")
	private Long schoolNo;
	
	@Column(name = "school_name")
	private String schoolName;
	
    public static School toEntity(SchoolDto schoolDto) {
    	
        return School.builder()
        		.schoolNo(schoolDto.getSchoolNo())
        		.schoolName(schoolDto.getSchoolName())
                .build();
    }	
}
