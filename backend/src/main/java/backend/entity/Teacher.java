package backend.entity;

import backend.dto.TeacherDto;
import backend.entity.role.Role;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
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
@Table(name = "teacher")
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
	
	@Enumerated(EnumType.STRING)
	@Column(name = "teacher_role")
	private Role teacherRole;
	
	public static Teacher toEntity(TeacherDto teacherDto) {
		return Teacher.builder()
				.teacherNo(teacherDto.getTeacherNo())
				.teacherName(teacherDto.getTeacherName())
				.teacherId(teacherDto.getTeacherId())
				.teacherPassword(teacherDto.getTeacherPassword())
				.teacherRole(teacherDto.getTeacherRole())
				.build();
	}
	
	/* 초기값 설정 */
	@PrePersist
	public void setDefaultValues() {
		if (this.teacherRole == null) this.teacherRole = Role.ROLE_TEACHER;
	}
}
