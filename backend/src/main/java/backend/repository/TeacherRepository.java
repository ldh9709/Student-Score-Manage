package backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.entity.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
	
	//선생님 번호로 선생님 찾기
	public Teacher findByTeacherNo(Long teacherNo);
	
	public Teacher findByTeacherId(String teacherId);
}
