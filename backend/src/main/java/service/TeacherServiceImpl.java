package service;

import org.springframework.beans.factory.annotation.Autowired;

import dto.TeacherDto;
import entity.Teacher;
import repository.TeacherRepository;

public class TeacherServiceImpl implements TeacherService {
	
	@Autowired
	TeacherRepository teacherRepository;
	
	@Override
	public Teacher saveTeacher(TeacherDto teacherDto) {
		
		return null;
	}

	@Override
	public Teacher updateTeacher(TeacherDto teacherDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Teacher deleteTeacher(Long teacherNo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Teacher getTeacher(Long teacherNo) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
