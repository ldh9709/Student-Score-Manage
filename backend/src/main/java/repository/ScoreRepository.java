package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Score;

public interface ScoreRepository extends JpaRepository<Score, Long> {

}
