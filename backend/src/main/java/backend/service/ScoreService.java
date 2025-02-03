package backend.service;

import java.util.List;

import backend.dto.ScoreDto;
import backend.entity.Score;
import backend.entity.Subject;

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
	
	//특정 학생 성적 리스트
	List<ScoreDto> getScoreListByStudentNo(Long studentNo);
	
	
}
