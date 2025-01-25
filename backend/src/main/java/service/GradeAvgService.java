package service;

import dto.GradeAvgDto;
import entity.GradeAvg;

public interface GradeAvgService {
	
	//성적 추가
	GradeAvg saveGradeAvg(GradeAvgDto gradeAvgDto);
	
	//성적 업데이트
	GradeAvg updateGradeAvg(GradeAvgDto gradeAvgDto);
	
	//성적 삭제
	GradeAvg deleteGradeAvg(Long gradeAvgNo);
	
	//성적 상세
	GradeAvg getGradeAvg(Long gradeAvgNo);
	
	
	
}
