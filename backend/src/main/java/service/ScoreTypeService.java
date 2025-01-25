package service;

import dto.ScoreTypeDto;
import entity.ScoreType;

public interface ScoreTypeService {
	
	//성적 추가
	ScoreType saveScoreType(ScoreTypeDto scoreTypeDto);
	
	//성적 업데이트
	ScoreType updateScoreType(ScoreTypeDto scoreTypeDto);
	
	//성적 삭제
	ScoreType deleteScoreType(Long scoreTypeNo);
	
	//성적 상세
	ScoreType getScoreType(Long scoreTypeNo);
	
	
	
}
