package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.ScoreType;

public interface ScoreTypeRepository extends JpaRepository<ScoreType, Long> {
	//시험유형 번호로 찾기
	public ScoreType findByScoreTypeNo(Long scoreTypeNo);
}
