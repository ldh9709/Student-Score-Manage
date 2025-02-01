package backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.dto.ScoreTypeDto;
import backend.entity.ScoreType;
import backend.entity.Subject;
import backend.repository.ScoreTypeRepository;
@Service
public class ScoreTypeServiceImpl implements ScoreTypeService {
	
	@Autowired
	ScoreTypeRepository scoreTypeRepository;
	
	@Override
	public ScoreType saveScoreType(ScoreTypeDto scoreTypeDto) {
		
		try {
		
			ScoreType scoreType = ScoreType.toEntity(scoreTypeDto);
			
			return scoreTypeRepository.save(scoreType);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("saveScoreType fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public ScoreType updateScoreType(ScoreTypeDto scoreTypeDto) {
		try {
			
			ScoreType scoreType = scoreTypeRepository.findByScoreTypeNo(scoreTypeDto.getScoreTypeNo());
			
			scoreType.setScoreTypeName(scoreTypeDto.getScoreTypeName());
			
			return scoreTypeRepository.save(scoreType);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("updateScoreType fail", e); // 예외 재던짐
		}
	}

	@Override
	public ScoreType deleteScoreType(Long scoreTypeNo) {
		try {
			
			ScoreType findScoreType = scoreTypeRepository.findByScoreTypeNo(scoreTypeNo);
			
			scoreTypeRepository.deleteById(scoreTypeNo);
			
			return findScoreType;

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("deleteScoreType fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public ScoreType getScoreType(Long scoreTypeNo) {
		try {
			
			ScoreType findScoreType = scoreTypeRepository.findByScoreTypeNo(scoreTypeNo);
			
			return findScoreType;
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("getScoreType fail", e); // 예외 재던짐
		}
	}

	@Override
	public List<ScoreType> getScoreTypeList() {
		return scoreTypeRepository.findAll();
	}

}
