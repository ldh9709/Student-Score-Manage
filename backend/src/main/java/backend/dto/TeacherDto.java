package backend.dto;

import backend.entity.Teacher;
import backend.entity.role.Role;
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
	
	private Role teacherRole;
	
	public static TeacherDto toDto(Teacher teacher) {
		return TeacherDto.builder()
				.teacherNo(teacher.getTeacherNo())
				.teacherName(teacher.getTeacherName())
				.teacherId(teacher.getTeacherId())
				.teacherPassword(teacher.getTeacherPassword())
				.teacherRole(teacher.getTeacherRole())
				.build();
	}
	
}
