package backend.service;

import backend.dto.TeacherDto;
import backend.entity.Teacher;

public interface TeacherService {
	
	//회원가입
	Teacher saveTeacher(TeacherDto teacherDto);
	
	//회원수정
	Teacher updateTeacher(TeacherDto teacherDto);
	
	//회원삭제
	Teacher deleteTeacher(Long teacherNo);
	
	//회원상세
	Teacher getTeacher(Long teacherNo);
	
	//회원상세
	Teacher getTeacherByTeacherId(String teacherId);
	
	
}
