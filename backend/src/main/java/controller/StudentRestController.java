package controller;

import java.nio.charset.Charset;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dto.StudentDto;
import entity.Student;
import io.swagger.v3.oas.annotations.Operation;
import response.Response;
import response.ResponseMessage;
import response.ResponseStatusCode;
import service.StudentService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/student")
public class StudentRestController {
	
	@Autowired
	private StudentService studentService;
	
	
    /* 공통 HttpHeaders 생성 메서드 */
    private HttpHeaders createHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(new MediaType(MediaType.APPLICATION_JSON, Charset.forName("UTF-8")));
        return headers;
    }

    /* 공통 ResponseEntity 생성 메서드 */
    private ResponseEntity<Response> createResponse(Response response, HttpHeaders headers, HttpStatus status) {
        return new ResponseEntity<>(response, headers, status);
    }
    
	/* 학생 추가 */
	@Operation(summary = "학생 추가")
	@PostMapping
    public ResponseEntity<Response> saveStudent(@RequestBody StudentDto studentDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        studentService.saveStudent(studentDto);

        response.setStatus(ResponseStatusCode.CREATED_STUDENT_SUCCESS);
        response.setMessage(ResponseMessage.CREATED_STUDENT_SUCCESS);

        return createResponse(response, headers, HttpStatus.CREATED);
    }
	
	/* 학생 수정 */
    @Operation(summary = "학생 수정")
    @PutMapping("/{studentNo}")
    public ResponseEntity<Response> updateStudent(@PathVariable Long studentNo, @RequestBody StudentDto studentDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        Student updatedStudent = studentService.updateStudent(studentDto);
        StudentDto updatedStudentDto = StudentDto.toDto(updatedStudent);

        response.setStatus(ResponseStatusCode.UPDATED_STUDENT_SUCCESS);
        response.setMessage(ResponseMessage.UPDATED_STUDENT_SUCCESS);
        response.setData(updatedStudentDto);

        return createResponse(response, headers, HttpStatus.OK);
    }
	
	/* 학생 조회 */
    @Operation(summary = "학생 조회")
    @GetMapping("/{studentNo}")
    public ResponseEntity<Response> getStudent(@PathVariable Long studentNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        Student student = studentService.getStudent(studentNo);
        StudentDto studentDto = StudentDto.toDto(student);

        response.setStatus(ResponseStatusCode.GET_STUDENT_SUCCESS);
        response.setMessage(ResponseMessage.GET_STUDENT_SUCCESS);
        response.setData(studentDto);

        return createResponse(response, headers, HttpStatus.OK);
    }

    /* 학생 리스트 조회 */
    @Operation(summary = "학생 리스트 조회")
    @GetMapping
    public ResponseEntity<Response> getStudentList() {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        List<StudentDto> studentList = studentService.getStudentList().stream()
                .map(StudentDto::toDto)
                .toList();

        response.setStatus(ResponseStatusCode.GET_STUDENT_SUCCESS);
        response.setMessage(ResponseMessage.GET_STUDENT_SUCCESS);
        response.setData(studentList);

        return createResponse(response, headers, HttpStatus.OK);
    }
    
	/* 학생 삭제 */
    @Operation(summary = "학생 삭제")
    @DeleteMapping("/{studentNo}")
    public ResponseEntity<Response> deleteStudent(@PathVariable Long studentNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        studentService.deleteStudent(studentNo);

        response.setStatus(ResponseStatusCode.DELETED_STUDENT_SUCCESS);
        response.setMessage(ResponseMessage.DELETED_STUDENT_SUCCESS);

        return createResponse(response, headers, HttpStatus.NO_CONTENT);
    }
}
