package service;

import dto.SchoolDto;
import entity.School;

public interface SchoolService {
	
	//성적 추가
	School saveSchool(SchoolDto schoolDto);
	
	//성적 업데이트
	School updateSchool(SchoolDto schoolDto);
	
	//성적 삭제
	School deleteSchool(Long schoolNo);
	
	//성적 상세
	School getSchool(Long schoolNo);
	
	
	
}
