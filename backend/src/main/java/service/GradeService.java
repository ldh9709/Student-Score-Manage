package service;

import dto.GradeDto;
import entity.Grade;

public interface GradeService {
	
	//성적 추가
	Grade saveGrade(GradeDto gradeDto);
	
	//성적 업데이트
	Grade updateGrade(GradeDto gradeDto);
	
	//성적 삭제
	Grade deleteGrade(Long gradeNo);
	
	//성적 상세
	Grade getGrade(Long gradeNo);
	
	
	
}
