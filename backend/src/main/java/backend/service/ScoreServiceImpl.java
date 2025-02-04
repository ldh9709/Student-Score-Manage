package backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.dto.ScoreDto;
import backend.entity.Score;
import backend.entity.ScoreType;
import backend.entity.Student;
import backend.entity.Subject;
import backend.repository.ScoreRepository;
@Service
public class ScoreServiceImpl implements ScoreService {
	
	@Autowired
	ScoreRepository scoreRepository;
	
	@Override
	public Score saveScore(ScoreDto scoreDto) {
		
		try {
		
			Score score = Score.toEntity(scoreDto);
			
			return scoreRepository.save(score);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("saveScore fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public List<Score> saveScores(List<ScoreDto> scoreDtoList) {
		try {
			List<Score> savedScores = new ArrayList<>();

			for (ScoreDto scoreDto : scoreDtoList) {
				Score score = Score.toEntity(scoreDto);
				savedScores.add(scoreRepository.save(score));

			}
			return savedScores;

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("saveScores fail", e); // 예외 재던짐
		}
	}
	
	

	@Override
	public Score updateScore(ScoreDto scoreDto) {
		try {
			
			Score score = scoreRepository.findByScoreNo(scoreDto.getScoreNo());
			
			Student student = Student.builder().studentNo(scoreDto.getStudentNo()).build();
			
			Subject subject = Subject.builder().subjectNo(scoreDto.getSubjectNo()).build();
			
			ScoreType scoreType = ScoreType.builder().scoreTypeNo(scoreDto.getScoreTypeNo()).build();
			
			if (scoreDto.getScoreValue() != null) {
	            score.setScoreValue(scoreDto.getScoreValue());
	        }
	        if (scoreDto.getScoreRating() != null) {
	            score.setScoreRating(scoreDto.getScoreRating());
	        }
	        if (scoreDto.getStudentNo() != null) {
	            score.setStudent(student);
	        }
	        if (scoreDto.getSubjectNo() != null) {
	            score.setSubject(subject);
	        }
	        if (scoreDto.getScoreTypeNo() != null) {
	            score.setScoreType(scoreType);
	        }
			
			return scoreRepository.save(score);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("updateScore fail", e); // 예외 재던짐
		}
	}

	@Override
	public Score deleteScore(Long scoreNo) {
		try {
			
			Score findScore = scoreRepository.findByScoreNo(scoreNo);
			
			scoreRepository.deleteById(scoreNo);
			
			return findScore;

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("deleteScore fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public Score getScore(Long scoreNo) {
		try {
			
			Score findScore = scoreRepository.findByScoreNo(scoreNo);
			
			return findScore;
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("getScore fail", e); // 예외 재던짐
		}
	}

	@Override
	public List<Score> getScoreList() {
		return scoreRepository.findAll();
	}

	@Override
	public List<ScoreDto> getScoreListByStudentNo(Long studentNo) {
		return scoreRepository.findByStudentStudentNo(studentNo)
				.stream().map(ScoreDto::toDto)
				.collect(Collectors.toList());
	}




}
