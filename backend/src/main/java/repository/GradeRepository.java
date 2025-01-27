package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Grade;

public interface GradeRepository extends JpaRepository<Grade, Long> {
	
	//학년 번호로 찾기
	public Grade findByGradeNo(Long gradeNo);
}
