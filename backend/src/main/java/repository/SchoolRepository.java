package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.School;

public interface SchoolRepository extends JpaRepository<School, Long> {
	
	//학교 번호로 찾기
	public School findBySchoolNo(Long schoolNo);
}
