package backend.entity;

import java.util.ArrayList;
import java.util.List;

import backend.dto.ScoreDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "score")
public class Score {
	
	@Id
	@SequenceGenerator(name = "score_no_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "score_no_SEQ")
	@Column(name = "score_no")
	private Long scoreNo;
	
	@Column(name = "score_value")
	private Integer scoreValue;
	
	@Column(name = "score_rating")
	private String scoreRating;
	
	@JoinColumn(name = "student_no")
	@ManyToOne(fetch = FetchType.LAZY)
	private Student student;
	
	@JoinColumn(name = "subject_no")
	@ManyToOne(fetch = FetchType.LAZY)
	private Subject subject;
	
	@JoinColumn(name = "score_type_no")
	@ManyToOne(fetch = FetchType.LAZY)
	private ScoreType scoreType;
	
	public static Score toEntity(ScoreDto scoreDto) {
	    // Student 객체 생성
	    Student student = Student.builder()
	            .studentNo(scoreDto.getStudentNo()) // DTO에서 studentNo 가져옴
	            .build();

	    // Subject 객체 생성
	    Subject subject = Subject.builder()
	            .subjectNo(scoreDto.getSubjectNo()) // DTO에서 subjectNo 가져옴
	            .build();

	    // ScoreType 객체 생성
	    ScoreType scoreType = ScoreType.builder()
	            .scoreTypeNo(scoreDto.getScoreTypeNo()) // DTO에서 scoreTypeNo 가져옴
	            .build();

	    // Score 객체 생성 및 빌드
	    return Score.builder()
	            .scoreNo(scoreDto.getScoreNo()) // PK 값 설정 (필요에 따라 null로 설정 가능)
	            .scoreValue(scoreDto.getScoreValue()) // 점수 설정
	            .scoreRating(scoreDto.getScoreRating()) // 등급 설정
	            .student(student) // 연관된 Student 객체 설정
	            .subject(subject) // 연관된 Subject 객체 설정
	            .scoreType(scoreType) // 연관된 ScoreType 객체 설정
	            .build();
	}

	
}
