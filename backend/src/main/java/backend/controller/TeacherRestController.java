package backend.controller;

import java.nio.charset.Charset;

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

import backend.dto.TeacherDto;
import backend.entity.Teacher;
import backend.response.Response;
import backend.response.ResponseMessage;
import backend.response.ResponseStatusCode;
import backend.service.TeacherService;
import io.swagger.v3.oas.annotations.Operation;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/member")
public class TeacherRestController {
	
	@Autowired
	private TeacherService teacherService;
	
	/* 회원 가입 */
	@Operation(summary = "회원가입")
	@PostMapping("/saveMember")
	public ResponseEntity<Response> saveMember(@RequestBody TeacherDto teacherDto) {
		
		//반환 객체 설정
		Response response = new Response();
		
		//인코딩 타입 설정
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(new MediaType(MediaType.APPLICATION_JSON, Charset.forName("UTF-8")));
		
		//저장 실행
		teacherService.saveTeacher(teacherDto);
		
		response.setStatus(ResponseStatusCode.CREATED_TEACHER_SUCCESS);
		response.setMessage(ResponseMessage.CREATED_TEACHER_SUCCESS);
		
		//반환할 응답Entity 생성
		ResponseEntity<Response> responseEntity =
				 new ResponseEntity<Response>(response, httpHeaders, HttpStatus.OK);	
		
		return responseEntity;			
	}
	
	/* 회원 수정 */
	@Operation(summary = "회원수정")
	@PutMapping("/updateMember")
	public ResponseEntity<Response> updateMember(@RequestBody TeacherDto teacherDto) {
		
		//반환 객체 설정
		Response response = new Response();
		
		//인코딩 타입 설정
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(new MediaType(MediaType.APPLICATION_JSON, Charset.forName("UTF-8")));
		
		//업데이트 실행	
		Teacher teacher = teacherService.updateTeacher(teacherDto);
		
		//반환 객체 DTO 변환
		TeacherDto updateTeacherDto = TeacherDto.toDto(teacher); 
		
		
		response.setStatus(ResponseStatusCode.UPDATED_TEACHER_SUCCESS);
		response.setMessage(ResponseMessage.UPDATED_TEACHER_SUCCESS);
		response.setData(updateTeacherDto);
		
		//반환할 응답Entity 생성
		ResponseEntity<Response> responseEntity =
				 new ResponseEntity<Response>(response, httpHeaders, HttpStatus.OK);	
		
		return responseEntity;			
	}
	
	/* 회원 조회 */
	@Operation(summary = "회원 조회")
	@GetMapping("/getMember")
	public ResponseEntity<Response> getMember(@PathVariable Long teacherNo) {
		
		//반환 객체 설정
		Response response = new Response();
		
		//인코딩 타입 설정
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(new MediaType(MediaType.APPLICATION_JSON, Charset.forName("UTF-8")));
		
		//조회 실행	
		Teacher teacher = teacherService.getTeacher(teacherNo);
		
		//반환 객체 DTO 변환
		TeacherDto getTeacherDto = TeacherDto.toDto(teacher); 
		
		
		response.setStatus(ResponseStatusCode.GET_TEACHER_SUCCESS);
		response.setMessage(ResponseMessage.GET_TEACHER_SUCCESS);
		response.setData(getTeacherDto);
		
		//반환할 응답Entity 생성
		ResponseEntity<Response> responseEntity =
				 new ResponseEntity<Response>(response, httpHeaders, HttpStatus.OK);	
		
		return responseEntity;			
	}
	
	/* 회원 조회 */
	@Operation(summary = "회원 삭제")
	@DeleteMapping("/deleteMember")
	public ResponseEntity<Response> deleteMember(@PathVariable Long teacherNo) {
		
		//반환 객체 설정
		Response response = new Response();
		
		//인코딩 타입 설정
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(new MediaType(MediaType.APPLICATION_JSON, Charset.forName("UTF-8")));
		
		//삭제 실행	
		teacherService.deleteTeacher(teacherNo);
		
		response.setStatus(ResponseStatusCode.GET_TEACHER_SUCCESS);
		response.setMessage(ResponseMessage.GET_TEACHER_SUCCESS);
		
		//반환할 응답Entity 생성
		ResponseEntity<Response> responseEntity =
				 new ResponseEntity<Response>(response, httpHeaders, HttpStatus.OK);	
		
		return responseEntity;			
	}	
}
