package service;

import dto.ScoreDto;
import entity.Score;

public interface ScoreService {
	
	//성적 추가
	Score saveScore(ScoreDto scoreDto);
	
	//성적 업데이트
	Score updateScore(ScoreDto scoreDto);
	
	//성적 삭제
	Score deleteScore(Long scoreNo);
	
	//성적 상세
	Score getScore(Long scoreNo);
	
	
	
}
