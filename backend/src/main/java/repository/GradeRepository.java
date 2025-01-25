package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Grade;

public interface GradeRepository extends JpaRepository<Grade, Long> {

}
