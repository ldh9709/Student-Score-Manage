package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dto.StudentDto;
import entity.Student;
import repository.StudentRepository;
@Service
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	StudentRepository studentRepository;
	
	@Override
	public Student saveStudent(StudentDto studentDto) {
		
		try {
		
			Student student = Student.toEntity(studentDto);
			
			return studentRepository.save(student);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("saveStudent fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public Student updateStudent(StudentDto studentDto) {
		try {
			
			Student student = studentRepository.findByStudentNo(studentDto.getStudentNo());
			
			if (studentDto.getStudentName() != null) {
		            student.setStudentName(studentDto.getStudentName());
	        }
	        if (studentDto.getStudentGender() != null) {
	            student.setStudentGender(studentDto.getStudentGender());
	        }
	        if (studentDto.getStudentBirthday() != null) {
	            student.setStudentBirthday(studentDto.getStudentBirthday());
	        }
	        if (studentDto.getStudentGrade() != null) {
	            student.setStudentGrade(studentDto.getStudentGrade());
	        }
	        if (studentDto.getStudentPhone() != null) {
	            student.setStudentPhone(studentDto.getStudentPhone());
	        }
	        if (studentDto.getStudentParentPhone() != null) {
	            student.setStudentParentPhone(studentDto.getStudentParentPhone());
	        }
	        if (studentDto.getStudentAddress() != null) {
	            student.setStudentAddress(studentDto.getStudentAddress());
	        }
	        if (studentDto.getStudentDetailAddress() != null) {
	            student.setStudentDetailAddress(studentDto.getStudentDetailAddress());
	        }
	        if (studentDto.getStudentSchool() != null) {
	            student.setStudentSchool(studentDto.getStudentSchool());
	        }
	        if (studentDto.getStudentRegistrationDate() != null) {
	            student.setStudentRegistrationDate(studentDto.getStudentRegistrationDate());
	        }

			
			return studentRepository.save(student);

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("updateStudent fail", e); // 예외 재던짐
		}
	}

	@Override
	public Student deleteStudent(Long studentNo) {
		try {
			
			Student findStudent = studentRepository.findByStudentNo(studentNo);
			
			studentRepository.deleteById(studentNo);
			
			return findStudent;

		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("deleteStudent fail", e); // 예외 재던짐
		}
		
	}

	@Override
	public Student getStudent(Long studentNo) {
		try {
			
			Student findStudent = studentRepository.findByStudentNo(studentNo);
			
			return findStudent;
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("getStudent fail", e); // 예외 재던짐
		}
	}

	@Override
	public List<Student> getStudentList() {
		return studentRepository.findAll();
	}
	
}
