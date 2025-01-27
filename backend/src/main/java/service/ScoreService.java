package service;

import java.util.List;

import dto.ScoreDto;
import entity.Score;
import entity.Subject;

public interface ScoreService {
	
	//성적 추가
	Score saveScore(ScoreDto scoreDto);
	
	//성적 업데이트
	Score updateScore(ScoreDto scoreDto);
	
	//성적 삭제
	Score deleteScore(Long scoreNo);
	
	//성적 상세
	Score getScore(Long scoreNo);

	//성적 리스트
	List<Score> getScoreList();
	
	
}
