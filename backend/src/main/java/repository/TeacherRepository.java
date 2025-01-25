package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import entity.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

}
