package backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.entity.Score;

public interface ScoreRepository extends JpaRepository<Score, Long> {
	//학생 번호로 찾기
	public Score findByScoreNo(Long scoreNo);
}
