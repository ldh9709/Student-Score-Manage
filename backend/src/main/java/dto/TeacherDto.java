package dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeacherDto {
	
	private Long teacherNo;
	
	private String teacherName;
	
	private String teacherId;
	
	private String teacherPassword;
	
}
