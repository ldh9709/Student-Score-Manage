package backend.service;

import java.util.List;

import backend.dto.StudentDto;
import backend.entity.Student;

public interface StudentService {
	
	//학생 추가
	Student saveStudent(StudentDto studentDto);
	
	//학생 업데이트
	Student updateStudent(StudentDto studentDto);
	
	//학생 삭제
	Student deleteStudent(Long studentNo);
	
	//학생 상세
	Student getStudent(Long studentNo);
	
	//학생 리스트
	List<Student> getStudentList();
	
	
}
