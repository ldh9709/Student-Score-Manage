package entity;

import dto.TeacherDto;
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
public class Teacher {
	
	@Id
	@SequenceGenerator(name = "teacher_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "teacher_no_SEQ")
	@Column(name = "teacher_no")
	private Long teacherNo;
	
	@Column(name = "teacher_name")
	private String teacherName;
	
	@Column(name = "teacher_id")
	private String teacherId;
	
	@Column(name = "teacher_password")
	private String teacherPassword;
	
	public static Teacher toEntity(TeacherDto teacherDto) {
		return Teacher.builder()
				.teacherNo(teacherDto.getTeacherNo())
				.teacherName(teacherDto.getTeacherName())
				.teacherId(teacherDto.getTeacherId())
				.teacherPassword(teacherDto.getTeacherPassword())
				.build();
	}
	
}
