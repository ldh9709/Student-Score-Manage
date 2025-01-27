package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dto.GradeAvgDto;
import entity.GradeAvg;
import entity.ScoreType;
import entity.Subject;
import repository.GradeAvgRepository;
@Service
public class GradeAvgServiceImpl implements GradeAvgService {
	
	@Autowired
	GradeAvgRepository gradeAvgRepository;
	
	@Override
	public GradeAvg saveGradeAvg(GradeAvgDto gradeAvgDto) {
		
		try {
		
			GradeAvg gradeAvg = GradeAvg.toEntity(gradeAvgDto);
			
			return gradeAvgRepository.save(gradeAvg);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("saveGradeAvg fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public GradeAvg updateGradeAvg(GradeAvgDto gradeAvgDto) {
		try {
			
			GradeAvg gradeAvg = gradeAvgRepository.findByGradeAvgNo(gradeAvgDto.getGradeAvgNo());
			
			Subject subject = Subject.builder().subjectNo(gradeAvgDto.getSubjectNo()).build();
			
			ScoreType scoreType = ScoreType.builder().scoreTypeNo(gradeAvgDto.getScoreTypeNo()).build();
			
			if (gradeAvgDto.getGradeAvgValue() != null) {
				gradeAvg.setGradeAvgValue(gradeAvgDto.getGradeAvgValue());
			}
			if (gradeAvgDto.getSubjectNo() != null) {
				gradeAvg.setSubject(subject);
			}
			if (gradeAvgDto.getScoreTypeNo() != null) {
				gradeAvg.setScoreType(scoreType);
			}
			
			return gradeAvgRepository.save(gradeAvg);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("updateGradeAvg fail", e); // 예외 재던짐
		}
	}

	@Override
	public GradeAvg deleteGradeAvg(Long gradeAvgNo) {
		try {
			
			GradeAvg findGradeAvg = gradeAvgRepository.findByGradeAvgNo(gradeAvgNo);
			
			gradeAvgRepository.deleteById(gradeAvgNo);
			
			return findGradeAvg;

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("deleteGradeAvg fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public GradeAvg getGradeAvg(Long gradeAvgNo) {
		try {
			
			GradeAvg findGradeAvg = gradeAvgRepository.findByGradeAvgNo(gradeAvgNo);
			
			return findGradeAvg;
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("getGradeAvg fail", e); // 예외 재던짐
		}
	}

	@Override
	public List<GradeAvg> getGradeAvgList() {
		return gradeAvgRepository.findAll();
	}
	
}
