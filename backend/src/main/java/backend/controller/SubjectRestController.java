package backend.controller;

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

import backend.dto.SubjectDto;
import backend.entity.Subject;
import backend.response.Response;
import backend.response.ResponseMessage;
import backend.response.ResponseStatusCode;
import backend.service.SubjectService;
import io.swagger.v3.oas.annotations.Operation;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/subject")
public class SubjectRestController {
	
	@Autowired
	private SubjectService subjectService;
	
	
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
    
	/* 과목 추가 */
	@Operation(summary = "과목 추가")
	@PostMapping
    public ResponseEntity<Response> saveSubject(@RequestBody SubjectDto subjectDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        subjectService.saveSubject(subjectDto);

        response.setStatus(ResponseStatusCode.CREATED_SUBJECT_SUCCESS);
        response.setMessage(ResponseMessage.CREATED_SUBJECT_SUCCESS);

        return createResponse(response, headers, HttpStatus.CREATED);
    }
	
	/* 과목 수정 */
    @Operation(summary = "과목 수정")
    @PutMapping("/{subjectNo}")
    public ResponseEntity<Response> updateSubject(@PathVariable Long subjectNo, @RequestBody SubjectDto subjectDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        Subject updatedSubject = subjectService.updateSubject(subjectDto);
        SubjectDto updatedSubjectDto = SubjectDto.toDto(updatedSubject);

        response.setStatus(ResponseStatusCode.UPDATED_SUBJECT_SUCCESS);
        response.setMessage(ResponseMessage.UPDATED_SUBJECT_SUCCESS);
        response.setData(updatedSubjectDto);

        return createResponse(response, headers, HttpStatus.OK);
    }
	
	/* 과목 조회 */
    @Operation(summary = "과목 조회")
    @GetMapping("/{subjectNo}")
    public ResponseEntity<Response> getSubject(@PathVariable Long subjectNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        Subject subject = subjectService.getSubject(subjectNo);
        SubjectDto subjectDto = SubjectDto.toDto(subject);

        response.setStatus(ResponseStatusCode.GET_SUBJECT_SUCCESS);
        response.setMessage(ResponseMessage.GET_SUBJECT_SUCCESS);
        response.setData(subjectDto);

        return createResponse(response, headers, HttpStatus.OK);
    }

    /* 과목 리스트 조회 */
    @Operation(summary = "과목 리스트 조회")
    @GetMapping
    public ResponseEntity<Response> getSubjectList() {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        List<SubjectDto> subjectList = subjectService.getSubjectList().stream()
                .map(SubjectDto::toDto)
                .toList();

        response.setStatus(ResponseStatusCode.GET_SUBJECT_SUCCESS);
        response.setMessage(ResponseMessage.GET_SUBJECT_SUCCESS);
        response.setData(subjectList);

        return createResponse(response, headers, HttpStatus.OK);
    }
    
	/* 과목 삭제 */
    @Operation(summary = "과목 삭제")
    @DeleteMapping("/{subjectNo}")
    public ResponseEntity<Response> deleteSubject(@PathVariable Long subjectNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        subjectService.deleteSubject(subjectNo);

        response.setStatus(ResponseStatusCode.DELETED_SUBJECT_SUCCESS);
        response.setMessage(ResponseMessage.DELETED_SUBJECT_SUCCESS);

        return createResponse(response, headers, HttpStatus.NO_CONTENT);
    }
}
