package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dto.GradeDto;
import entity.Grade;
import repository.GradeRepository;
@Service
public class GradeServiceImpl implements GradeService {
	
	@Autowired
	GradeRepository gradeRepository;
	
	@Override
	public Grade saveGrade(GradeDto gradeDto) {
		
		try {
		
			Grade grade = Grade.toEntity(gradeDto);
			
			return gradeRepository.save(grade);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("saveGrade fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public Grade updateGrade(GradeDto gradeDto) {
		try {
			
			Grade grade = gradeRepository.findByGradeNo(gradeDto.getGradeNo());
			
			grade.setGradeName(gradeDto.getGradeName());
			
			return gradeRepository.save(grade);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("updateGrade fail", e); // 예외 재던짐
		}
	}

	@Override
	public Grade deleteGrade(Long gradeNo) {
		try {
			
			Grade findGrade = gradeRepository.findByGradeNo(gradeNo);
			
			gradeRepository.deleteById(gradeNo);
			
			return findGrade;

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("deleteGrade fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public Grade getGrade(Long gradeNo) {
		try {
			
			Grade findGrade = gradeRepository.findByGradeNo(gradeNo);
			
			return findGrade;
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("getGrade fail", e); // 예외 재던짐
		}
	}

	@Override
	public List<Grade> getGradeList() {
		return gradeRepository.findAll();
	}
	
}
