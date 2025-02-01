package backend.service;

import java.util.List;

import backend.dto.GradeAvgDto;
import backend.entity.Grade;
import backend.entity.GradeAvg;

public interface GradeAvgService {
	
	//학년 평균 추가
	GradeAvg saveGradeAvg(GradeAvgDto gradeAvgDto);
	
	//학년 평균 업데이트
	GradeAvg updateGradeAvg(GradeAvgDto gradeAvgDto);
	
	//학년 평균 삭제
	GradeAvg deleteGradeAvg(Long gradeAvgNo);
	
	//학년 평균 상세
	GradeAvg getGradeAvg(Long gradeAvgNo);

	//학년 평균 리스트
	List<GradeAvg> getGradeAvgList();	
	
	
}
