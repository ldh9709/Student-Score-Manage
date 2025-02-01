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

import backend.dto.GradeDto;
import backend.entity.Grade;
import backend.response.Response;
import backend.response.ResponseMessage;
import backend.response.ResponseStatusCode;
import backend.service.GradeService;
import io.swagger.v3.oas.annotations.Operation;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/grade")
public class GradeRestController {
	
	@Autowired
	private GradeService gradeService;
	
	
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
    
	/* 학년 추가 */
	@Operation(summary = "학년 추가")
	@PostMapping
    public ResponseEntity<Response> saveGrade(@RequestBody GradeDto gradeDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        gradeService.saveGrade(gradeDto);

        response.setStatus(ResponseStatusCode.CREATED_GRADE_SUCCESS);
        response.setMessage(ResponseMessage.CREATED_GRADE_SUCCESS);

        return createResponse(response, headers, HttpStatus.CREATED);
    }
	
	/* 학년 수정 */
    @Operation(summary = "학년 수정")
    @PutMapping("/{gradeNo}")
    public ResponseEntity<Response> updateGrade(@PathVariable Long gradeNo, @RequestBody GradeDto gradeDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        Grade updatedGrade = gradeService.updateGrade(gradeDto);
        GradeDto updatedGradeDto = GradeDto.toDto(updatedGrade);

        response.setStatus(ResponseStatusCode.UPDATED_GRADE_SUCCESS);
        response.setMessage(ResponseMessage.UPDATED_GRADE_SUCCESS);
        response.setData(updatedGradeDto);

        return createResponse(response, headers, HttpStatus.OK);
    }
	
	/* 학년 조회 */
    @Operation(summary = "학년 조회")
    @GetMapping("/{gradeNo}")
    public ResponseEntity<Response> getGrade(@PathVariable Long gradeNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        Grade grade = gradeService.getGrade(gradeNo);
        GradeDto gradeDto = GradeDto.toDto(grade);

        response.setStatus(ResponseStatusCode.GET_GRADE_SUCCESS);
        response.setMessage(ResponseMessage.GET_GRADE_SUCCESS);
        response.setData(gradeDto);

        return createResponse(response, headers, HttpStatus.OK);
    }

    /* 학년 리스트 조회 */
    @Operation(summary = "학년 리스트 조회")
    @GetMapping
    public ResponseEntity<Response> getGradeList() {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        List<GradeDto> gradeList = gradeService.getGradeList().stream()
                .map(GradeDto::toDto)
                .toList();

        response.setStatus(ResponseStatusCode.GET_GRADE_SUCCESS);
        response.setMessage(ResponseMessage.GET_GRADE_SUCCESS);
        response.setData(gradeList);

        return createResponse(response, headers, HttpStatus.OK);
    }
    
	/* 학년 삭제 */
    @Operation(summary = "학년 삭제")
    @DeleteMapping("/{gradeNo}")
    public ResponseEntity<Response> deleteGrade(@PathVariable Long gradeNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        gradeService.deleteGrade(gradeNo);

        response.setStatus(ResponseStatusCode.DELETED_GRADE_SUCCESS);
        response.setMessage(ResponseMessage.DELETED_GRADE_SUCCESS);

        return createResponse(response, headers, HttpStatus.NO_CONTENT);
    }
}
