package backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.dto.SchoolDto;
import backend.entity.School;
import backend.repository.SchoolRepository;
@Service
public class SchoolServiceImpl implements SchoolService {
	
	@Autowired
	SchoolRepository schoolRepository;
	
	@Override
	public School saveSchool(SchoolDto schoolDto) {
		
		try {
		
			School school = School.toEntity(schoolDto);
			
			return schoolRepository.save(school);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("saveSchool fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public School updateSchool(SchoolDto schoolDto) {
		try {
			
			School school = schoolRepository.findBySchoolNo(schoolDto.getSchoolNo());
			
			school.setSchoolName(schoolDto.getSchoolName());
			
			return schoolRepository.save(school);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("updateSchool fail", e); // 예외 재던짐
		}
	}

	@Override
	public School deleteSchool(Long schoolNo) {
		try {
			
			School findSchool = schoolRepository.findBySchoolNo(schoolNo);
			
			schoolRepository.deleteById(schoolNo);
			
			return findSchool;

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("deleteSchool fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public School getSchool(Long schoolNo) {
		try {
			
			School findSchool = schoolRepository.findBySchoolNo(schoolNo);
			
			return findSchool;
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("getSchool fail", e); // 예외 재던짐
		}
	}

	@Override
	public List<School> getSchoolList() {
		return schoolRepository.findAll();
	}
	
}
