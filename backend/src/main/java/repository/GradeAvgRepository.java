package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.GradeAvg;

public interface GradeAvgRepository extends JpaRepository<GradeAvg, Long> {

}
