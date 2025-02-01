package backend.service;

import java.util.List;

import backend.dto.SubjectDto;
import backend.entity.Subject;

public interface SubjectService {
	
	//과목 추가
	Subject saveSubject(SubjectDto subjectDto);
	
	//과목 업데이트
	Subject updateSubject(SubjectDto subjectDto);
	
	//과목 삭제
	Subject deleteSubject(Long subjectNo);
	
	//과목 상세
	Subject getSubject(Long subjectNo);
	
	//과목 리스트
	List<Subject> getSubjectList();
	
}
