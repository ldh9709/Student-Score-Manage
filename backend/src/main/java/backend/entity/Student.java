package backend.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import backend.dto.StudentDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
@Table(name = "student")
public class Student {

    @Id
    @SequenceGenerator(name = "student_no_SEQ", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "student_no_SEQ")
    @Column(name = "student_no")
    private Long studentNo;

    @Column(name = "student_name")
    private String studentName;

    @Column(name = "student_gender")
    private String studentGender;

    @Column(name = "student_birthday")
    private LocalDateTime studentBirthday;

    @Column(name = "student_grade")
    private String studentGrade; // FK가 아니라 문자열로 처리

    @Column(name = "student_phone")
    private String studentPhone;

    @Column(name = "student_parent_phone")
    private String studentParentPhone;

    @Column(name = "student_address")
    private String studentAddress;

    @Column(name = "student_detail_address")
    private String studentDetailAddress;

    @Column(name = "student_school")
    private String studentSchool;

    @Column(name = "student_registration_date")
    private LocalDateTime studentRegistrationDate;

    @OneToMany(mappedBy = "student", fetch = FetchType.LAZY)
    @Builder.Default
    private List<Score> score = new ArrayList<>();

    // toEntity 메서드 작성
    public static Student toEntity(StudentDto studentDto) {
        return Student.builder()
                .studentNo(studentDto.getStudentNo()) // 번호 설정
                .studentName(studentDto.getStudentName()) // 이름 설정
                .studentGender(studentDto.getStudentGender()) // 성별 설정
                .studentBirthday(studentDto.getStudentBirthday()) // 생년월일 설정
                .studentGrade(studentDto.getStudentGrade()) // 학년(FK 아님)
                .studentPhone(studentDto.getStudentPhone()) // 전화번호 설정
                .studentParentPhone(studentDto.getStudentParentPhone()) // 부모님 전화번호 설정
                .studentAddress(studentDto.getStudentAddress()) // 기본 주소 설정
                .studentDetailAddress(studentDto.getStudentDetailAddress()) // 상세 주소 설정
                .studentSchool(studentDto.getStudentSchool()) // 학교 설정
                .studentRegistrationDate(studentDto.getStudentRegistrationDate()) // 등록일 설정
                .build();
    }
}
