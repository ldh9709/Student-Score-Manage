package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.ScoreType;

public interface ScoreTypeRepository extends JpaRepository<ScoreType, Long> {

}
