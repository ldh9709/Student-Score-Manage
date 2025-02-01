package backend.dto;

import java.time.LocalDateTime;

import backend.entity.Student;
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
	
    public static StudentDto toDto(Student student) {
        return StudentDto.builder()
                .studentNo(student.getStudentNo()) // 번호
                .studentName(student.getStudentName()) // 이름
                .studentGender(student.getStudentGender()) // 성별
                .studentBirthday(student.getStudentBirthday()) // 생년월일
                .studentGrade(student.getStudentGrade()) // 학년
                .studentPhone(student.getStudentPhone()) // 전화번호
                .studentParentPhone(student.getStudentParentPhone()) // 부모님 전화번호
                .studentAddress(student.getStudentAddress()) // 기본 주소
                .studentDetailAddress(student.getStudentDetailAddress()) // 상세 주소
                .studentSchool(student.getStudentSchool()) // 학교
                .studentRegistrationDate(student.getStudentRegistrationDate()) // 등록일
                .build();
    }
	
	
	
}
