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

import dto.SchoolDto;
import entity.School;
import io.swagger.v3.oas.annotations.Operation;
import response.Response;
import response.ResponseMessage;
import response.ResponseStatusCode;
import service.SchoolService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/school")
public class SchoolRestController {
	
	@Autowired
	private SchoolService schoolService;
	
	
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
    
	/* 학교 추가 */
	@Operation(summary = "학교 추가")
	@PostMapping
    public ResponseEntity<Response> saveSchool(@RequestBody SchoolDto schoolDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        schoolService.saveSchool(schoolDto);

        response.setStatus(ResponseStatusCode.CREATED_SCORE_TYPE_SUCCESS);
        response.setMessage(ResponseMessage.CREATED_SCORE_TYPE_SUCCESS);

        return createResponse(response, headers, HttpStatus.CREATED);
    }
	
	/* 학교 수정 */
    @Operation(summary = "학교 수정")
    @PutMapping("/{schoolNo}")
    public ResponseEntity<Response> updateSchool(@PathVariable Long schoolNo, @RequestBody SchoolDto schoolDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        School updatedSchool = schoolService.updateSchool(schoolDto);
        SchoolDto updatedSchoolDto = SchoolDto.toDto(updatedSchool);

        response.setStatus(ResponseStatusCode.UPDATED_SCORE_TYPE_SUCCESS);
        response.setMessage(ResponseMessage.UPDATED_SCORE_TYPE_SUCCESS);
        response.setData(updatedSchoolDto);

        return createResponse(response, headers, HttpStatus.OK);
    }
	
	/* 학교 조회 */
    @Operation(summary = "학교 조회")
    @GetMapping("/{schoolNo}")
    public ResponseEntity<Response> getSchool(@PathVariable Long schoolNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        School school = schoolService.getSchool(schoolNo);
        SchoolDto schoolDto = SchoolDto.toDto(school);

        response.setStatus(ResponseStatusCode.GET_SCORE_TYPE_SUCCESS);
        response.setMessage(ResponseMessage.GET_SCORE_TYPE_SUCCESS);
        response.setData(schoolDto);

        return createResponse(response, headers, HttpStatus.OK);
    }

    /* 학교 리스트 조회 */
    @Operation(summary = "학교 리스트 조회")
    @GetMapping
    public ResponseEntity<Response> getSchoolList() {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        List<SchoolDto> schoolList = schoolService.getSchoolList().stream()
                .map(SchoolDto::toDto)
                .toList();

        response.setStatus(ResponseStatusCode.GET_SCORE_TYPE_SUCCESS);
        response.setMessage(ResponseMessage.GET_SCORE_TYPE_SUCCESS);
        response.setData(schoolList);

        return createResponse(response, headers, HttpStatus.OK);
    }
    
	/* 학교 삭제 */
    @Operation(summary = "학교 삭제")
    @DeleteMapping("/{schoolNo}")
    public ResponseEntity<Response> deleteSchool(@PathVariable Long schoolNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        schoolService.deleteSchool(schoolNo);

        response.setStatus(ResponseStatusCode.DELETED_SCORE_TYPE_SUCCESS);
        response.setMessage(ResponseMessage.DELETED_SCORE_TYPE_SUCCESS);

        return createResponse(response, headers, HttpStatus.NO_CONTENT);
    }
}
