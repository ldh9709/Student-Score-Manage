package backend.controller;

import java.nio.charset.Charset;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import backend.dto.ScoreDto;
import backend.entity.Score;
import backend.response.Response;
import backend.response.ResponseMessage;
import backend.response.ResponseStatusCode;
import backend.service.ScoreService;
import io.swagger.v3.oas.annotations.Operation;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/score")
public class ScoreRestController {

    @Autowired
    private ScoreService scoreService;

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

    /* 성적 추가 */
    @Operation(summary = "성적 추가")
    @PostMapping
    public ResponseEntity<Response> saveScore(@RequestBody ScoreDto scoreDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        Score score = scoreService.saveScore(scoreDto);

        response.setStatus(ResponseStatusCode.CREATED_SCORE_SUCCESS);
        response.setMessage(ResponseMessage.CREATED_SCORE_SUCCESS);
        response.setData(score);

        return createResponse(response, headers, HttpStatus.CREATED);
    }
    
    /* 성적 리스트 추가 */
    @Operation(summary = "성적 리스트 추가")
    @PostMapping("/scores")
    public ResponseEntity<Response> saveScores(@RequestBody List<ScoreDto> scoreDtoList) {
    	Response response = new Response();
    	HttpHeaders headers = createHttpHeaders();
    	
    	List<Score> savedScores = scoreService.saveScores(scoreDtoList);
    	
    	response.setStatus(ResponseStatusCode.CREATED_SCORE_SUCCESS);
    	response.setMessage(ResponseMessage.CREATED_SCORE_SUCCESS);
    	response.setData(savedScores);
    	
    	return createResponse(response, headers, HttpStatus.CREATED);
    }

    /* 성적 수정 */
    @Operation(summary = "성적 수정")
    @PutMapping("/{scoreNo}")
    public ResponseEntity<Response> updateScore(@PathVariable("scoreNo") Long scoreNo, @RequestBody ScoreDto scoreDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        Score updatedScore = scoreService.updateScore(scoreDto);
        ScoreDto updatedScoreDto = ScoreDto.toDto(updatedScore);

        response.setStatus(ResponseStatusCode.UPDATED_SCORE_SUCCESS);
        response.setMessage(ResponseMessage.UPDATED_SCORE_SUCCESS);
        response.setData(updatedScoreDto);

        return createResponse(response, headers, HttpStatus.OK);
    }
    
    /* 성적 리스트 수정 */
    @Operation(summary = "성적 리스트 수정")
    @PutMapping("/scores")
    public ResponseEntity<Response> updateScores(@RequestBody List<ScoreDto> scoreDtoList) { // @PathVariable 제거
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        List<Score> updatedScores = scoreService.updateScores(scoreDtoList); // 여러 개의 점수를 업데이트

        response.setStatus(ResponseStatusCode.UPDATED_SCORE_SUCCESS);
        response.setMessage(ResponseMessage.UPDATED_SCORE_SUCCESS);
        response.setData(updatedScores);

        return createResponse(response, headers, HttpStatus.OK);
    }


    /* 성적 조회 */
    @Operation(summary = "성적 조회")
    @GetMapping("/{scoreNo}")
    public ResponseEntity<Response> getScore(@PathVariable("scoreNo") Long scoreNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        Score score = scoreService.getScore(scoreNo);
        ScoreDto scoreDto = ScoreDto.toDto(score);

        response.setStatus(ResponseStatusCode.GET_SCORE_SUCCESS);
        response.setMessage(ResponseMessage.GET_SCORE_SUCCESS);
        response.setData(scoreDto);

        return createResponse(response, headers, HttpStatus.OK);
    }

    /* 성적 리스트 조회 */
    @Operation(summary = "성적 리스트 조회")
    @GetMapping
    public ResponseEntity<Response> getScoreList() {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        List<ScoreDto> scoreList = scoreService.getScoreList().stream()
                .map(ScoreDto::toDto)
                .toList();

        response.setStatus(ResponseStatusCode.GET_SCORE_LIST_SUCCESS);
        response.setMessage(ResponseMessage.GET_SCORE_LIST_SUCCESS);
        response.setData(scoreList);

        return createResponse(response, headers, HttpStatus.OK);
    }

    /* 성적 삭제 */
    @Operation(summary = "성적 삭제")
    @DeleteMapping("/{scoreNo}")
    public ResponseEntity<Response> deleteScore(@PathVariable("scoreNo") Long scoreNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        scoreService.deleteScore(scoreNo);

        response.setStatus(ResponseStatusCode.DELETED_SCORE_SUCCESS);
        response.setMessage(ResponseMessage.DELETED_SCORE_SUCCESS);

        return createResponse(response, headers, HttpStatus.NO_CONTENT);
    }
    
    /* 학생 성적 리스트 조회 */
    @Operation(summary = "학생 성적 리스트 조회")    
    @GetMapping("/student/{studentNo}")
    public ResponseEntity<Response> getScoreListByStudentNo(@PathVariable("studentNo") Long studentNo) {
    	Response response = new Response();
        HttpHeaders headers = createHttpHeaders();
        
        List<ScoreDto> scoreList = scoreService.getScoreListByStudentNo(studentNo);
        
        response.setStatus(ResponseStatusCode.GET_SCORE_LIST_SUCCESS);
        response.setMessage(ResponseMessage.GET_SCORE_LIST_SUCCESS);
        response.setData(scoreList);
        
    	return createResponse(response, headers, HttpStatus.OK);
    }
}
