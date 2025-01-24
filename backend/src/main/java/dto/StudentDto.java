package dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {
	
	private Long studentNo;
	
	private String studentName;
	
	private String studentGender;
	
	private LocalDateTime studentBirthday;
	
	private String studentGrade;
	
	private String studentPhone;
	
	private String studentParentPhone;
	
	private String studentAddress;
	
	private String studentDetailAddress;
	
	private String studentSchool;
	
	private LocalDateTime studentRegistrationDate;
	
	
	
}
