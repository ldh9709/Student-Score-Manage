package backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	
	//학생 번호로 찾기
	public Student findByStudentNo(Long studentNo);
}
