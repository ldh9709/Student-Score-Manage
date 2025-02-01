package backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.entity.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
	
	//과목 번호로 찾기
	public Subject findBySubjectNo(Long subjectNo);
}
