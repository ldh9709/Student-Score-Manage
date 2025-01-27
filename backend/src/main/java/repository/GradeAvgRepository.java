package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.GradeAvg;

public interface GradeAvgRepository extends JpaRepository<GradeAvg, Long> {
	
	//학생 번호로 찾기
	public GradeAvg findByGradeAvgNo(Long gradeAvgNo);
}
