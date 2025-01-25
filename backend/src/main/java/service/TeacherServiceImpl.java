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
		
		try {
		
			Teacher teacher = Teacher.toEntity(teacherDto);
			
			return teacherRepository.save(teacher);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("saveTeacher fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public Teacher updateTeacher(TeacherDto teacherDto) {
		try {
			
			Teacher teacher = teacherRepository.findByTeacherNo(teacherDto.getTeacherNo());
			
			teacher.setTeacherName(teacherDto.getTeacherName());
			
			teacher.setTeacherPassword(teacherDto.getTeacherPassword());
			
			return teacherRepository.save(teacher);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("updateTeacher fail", e); // 예외 재던짐
		}
	}

	@Override
	public Teacher deleteTeacher(Long teacherNo) {
		try {
			
			Teacher findTeacher = teacherRepository.findByTeacherNo(teacherNo);
			
			teacherRepository.deleteById(teacherNo);
			
			return findTeacher;

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("deleteTeacher fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public Teacher getTeacher(Long teacherNo) {
		try {
			
			Teacher findTeacher = teacherRepository.findByTeacherNo(teacherNo);
			
			return findTeacher;
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("getTeacher fail", e); // 예외 재던짐
		}
	}
	
}
