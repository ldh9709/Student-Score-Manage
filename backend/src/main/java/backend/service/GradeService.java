package backend.service;

import java.util.List;

import backend.dto.GradeDto;
import backend.entity.Grade;
import backend.entity.School;

public interface GradeService {
	
	//학년 추가
	Grade saveGrade(GradeDto gradeDto);
	
	//학년 업데이트
	Grade updateGrade(GradeDto gradeDto);
	
	//학년 삭제
	Grade deleteGrade(Long gradeNo);
	
	//학년 상세
	Grade getGrade(Long gradeNo);
	
	//학년 리스트
	List<Grade> getGradeList();	
	
	
}
