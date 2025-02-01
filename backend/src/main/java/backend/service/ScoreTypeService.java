package backend.service;

import java.util.List;

import backend.dto.ScoreTypeDto;
import backend.entity.ScoreType;
import backend.entity.Subject;

public interface ScoreTypeService {
	
	//성적 타입 추가
	ScoreType saveScoreType(ScoreTypeDto scoreTypeDto);
	
	//성적 타입 업데이트
	ScoreType updateScoreType(ScoreTypeDto scoreTypeDto);
	
	//성적 타입 삭제
	ScoreType deleteScoreType(Long scoreTypeNo);
	
	//성적 타입 상세
	ScoreType getScoreType(Long scoreTypeNo);
	
	//성적 타입 리스트
	List<ScoreType> getScoreTypeList();	
	
}
