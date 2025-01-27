package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dto.SubjectDto;
import entity.Subject;
import repository.SubjectRepository;
@Service
public class SubjectServiceImpl implements SubjectService {
	
	@Autowired
	SubjectRepository subjectRepository;
	
	@Override
	public Subject saveSubject(SubjectDto subjectDto) {
		
		try {
		
			Subject subject = Subject.toEntity(subjectDto);
			
			return subjectRepository.save(subject);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("saveSubject fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public Subject updateSubject(SubjectDto subjectDto) {
		try {
			
			Subject subject = subjectRepository.findBySubjectNo(subjectDto.getSubjectNo());
			
			subject.setSubjectName(subjectDto.getSubjectName());
			
			return subjectRepository.save(subject);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("updateSubject fail", e); // 예외 재던짐
		}
	}

	@Override
	public Subject deleteSubject(Long subjectNo) {
		try {
			
			Subject findSubject = subjectRepository.findBySubjectNo(subjectNo);
			
			subjectRepository.deleteById(subjectNo);
			
			return findSubject;

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("deleteSubject fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public Subject getSubject(Long subjectNo) {
		try {
			
			Subject findSubject = subjectRepository.findBySubjectNo(subjectNo);
			
			return findSubject;
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("getSubject fail", e); // 예외 재던짐
		}
	}

	@Override
	public List<Subject> getSubjectList() {
		
		return subjectRepository.findAll();
	}
	
}
