package backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import backend.entity.Score;

public interface ScoreRepository extends JpaRepository<Score, Long> {
	//성적 번호로 찾기
	public Score findByScoreNo(Long scoreNo);
	
	//학생 번호로 성적 조회
	public List<Score> findByStudentStudentNo(Long studentNo);
	
	
}
