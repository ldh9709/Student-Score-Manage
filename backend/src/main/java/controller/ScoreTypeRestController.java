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

import dto.ScoreTypeDto;
import entity.ScoreType;
import io.swagger.v3.oas.annotations.Operation;
import response.Response;
import response.ResponseMessage;
import response.ResponseStatusCode;
import service.ScoreTypeService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/scoreType")
public class ScoreTypeRestController {
	
	@Autowired
	private ScoreTypeService scoreTypeService;
	
	
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
    
	/* 시험 유형 추가 */
	@Operation(summary = "시험 유형 추가")
	@PostMapping
    public ResponseEntity<Response> saveScoreType(@RequestBody ScoreTypeDto scoreTypeDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        scoreTypeService.saveScoreType(scoreTypeDto);

        response.setStatus(ResponseStatusCode.CREATED_SCORE_TYPE_SUCCESS);
        response.setMessage(ResponseMessage.CREATED_SCORE_TYPE_SUCCESS);

        return createResponse(response, headers, HttpStatus.CREATED);
    }
	
	/* 시험 유형 수정 */
    @Operation(summary = "시험 유형 수정")
    @PutMapping("/{scoreTypeNo}")
    public ResponseEntity<Response> updateScoreType(@PathVariable Long scoreTypeNo, @RequestBody ScoreTypeDto scoreTypeDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        ScoreType updatedScoreType = scoreTypeService.updateScoreType(scoreTypeDto);
        ScoreTypeDto updatedScoreTypeDto = ScoreTypeDto.toDto(updatedScoreType);

        response.setStatus(ResponseStatusCode.UPDATED_SCORE_TYPE_SUCCESS);
        response.setMessage(ResponseMessage.UPDATED_SCORE_TYPE_SUCCESS);
        response.setData(updatedScoreTypeDto);

        return createResponse(response, headers, HttpStatus.OK);
    }
	
	/* 시험 유형 조회 */
    @Operation(summary = "시험 유형 조회")
    @GetMapping("/{scoreTypeNo}")
    public ResponseEntity<Response> getScoreType(@PathVariable Long scoreTypeNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        ScoreType scoreType = scoreTypeService.getScoreType(scoreTypeNo);
        ScoreTypeDto scoreTypeDto = ScoreTypeDto.toDto(scoreType);

        response.setStatus(ResponseStatusCode.GET_SCORE_TYPE_SUCCESS);
        response.setMessage(ResponseMessage.GET_SCORE_TYPE_SUCCESS);
        response.setData(scoreTypeDto);

        return createResponse(response, headers, HttpStatus.OK);
    }

    /* 시험 유형 리스트 조회 */
    @Operation(summary = "시험 유형 리스트 조회")
    @GetMapping
    public ResponseEntity<Response> getScoreTypeList() {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        List<ScoreTypeDto> scoreTypeList = scoreTypeService.getScoreTypeList().stream()
                .map(ScoreTypeDto::toDto)
                .toList();

        response.setStatus(ResponseStatusCode.GET_SCORE_TYPE_SUCCESS);
        response.setMessage(ResponseMessage.GET_SCORE_TYPE_SUCCESS);
        response.setData(scoreTypeList);

        return createResponse(response, headers, HttpStatus.OK);
    }
    
	/* 시험 유형 삭제 */
    @Operation(summary = "시험 유형 삭제")
    @DeleteMapping("/{scoreTypeNo}")
    public ResponseEntity<Response> deleteScoreType(@PathVariable Long scoreTypeNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        scoreTypeService.deleteScoreType(scoreTypeNo);

        response.setStatus(ResponseStatusCode.DELETED_SCORE_TYPE_SUCCESS);
        response.setMessage(ResponseMessage.DELETED_SCORE_TYPE_SUCCESS);

        return createResponse(response, headers, HttpStatus.NO_CONTENT);
    }
}
