package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {

}
