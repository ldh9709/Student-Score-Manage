package dto;

import entity.Teacher;
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
	
	public static Teacher toDto(Teacher teacher) {
		return Teacher.builder()
				.teacherNo(teacher.getTeacherNo())
				.teacherName(teacher.getTeacherName())
				.teacherId(teacher.getTeacherId())
				.teacherPassword(teacher.getTeacherPassword())
				.build();
	}
	
}
