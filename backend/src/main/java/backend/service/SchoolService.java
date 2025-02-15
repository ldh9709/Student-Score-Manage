package backend.service;

import java.util.List;

import backend.dto.SchoolDto;
import backend.entity.School;
import backend.entity.Score;

public interface SchoolService {
	
	//학교 추가
	School saveSchool(SchoolDto schoolDto);
	
	//학교 업데이트
	School updateSchool(SchoolDto schoolDto);
	
	//학교 삭제
	School deleteSchool(Long schoolNo);
	
	//학교 상세
	School getSchool(Long schoolNo);

	//학교 리스트
	List<School> getSchoolList();
	
	
}
