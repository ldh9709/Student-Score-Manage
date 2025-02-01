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

import backend.dto.GradeAvgDto;
import backend.entity.GradeAvg;
import backend.response.Response;
import backend.response.ResponseMessage;
import backend.response.ResponseStatusCode;
import backend.service.GradeAvgService;
import io.swagger.v3.oas.annotations.Operation;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/gradeAvg")
public class GradeAvgRestController {
    
    @Autowired
    private GradeAvgService gradeAvgService;
    
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

    /* 학년 평균 추가 */
    @Operation(summary = "학년 평균 추가")
    @PostMapping
    public ResponseEntity<Response> saveGradeAvg(@RequestBody GradeAvgDto gradeAvgDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        gradeAvgService.saveGradeAvg(gradeAvgDto);

        response.setStatus(ResponseStatusCode.CREATED_GRADE_AVG_SUCCESS);
        response.setMessage(ResponseMessage.CREATED_GRADE_AVG_SUCCESS);

        return createResponse(response, headers, HttpStatus.CREATED);
    }

    /* 학년 평균 수정 */
    @Operation(summary = "학년 평균 수정")
    @PutMapping("/{gradeAvgNo}")
    public ResponseEntity<Response> updateGradeAvg(@PathVariable("gradeAvgNo") Long gradeAvgNo, @RequestBody GradeAvgDto gradeAvgDto) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        GradeAvg updatedGradeAvg = gradeAvgService.updateGradeAvg(gradeAvgDto);
        GradeAvgDto updatedGradeAvgDto = GradeAvgDto.toDto(updatedGradeAvg);

        response.setStatus(ResponseStatusCode.UPDATED_GRADE_AVG_SUCCESS);
        response.setMessage(ResponseMessage.UPDATED_GRADE_AVG_SUCCESS);
        response.setData(updatedGradeAvgDto);

        return createResponse(response, headers, HttpStatus.OK);
    }

    /* 학년 평균 조회 */
    @Operation(summary = "학년 평균 조회")
    @GetMapping("/{gradeAvgNo}")
    public ResponseEntity<Response> getGradeAvg(@PathVariable("gradeAvgNo") Long gradeAvgNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        GradeAvg gradeAvg = gradeAvgService.getGradeAvg(gradeAvgNo);
        GradeAvgDto gradeAvgDto = GradeAvgDto.toDto(gradeAvg);

        response.setStatus(ResponseStatusCode.GET_GRADE_AVG_SUCCESS);
        response.setMessage(ResponseMessage.GET_GRADE_AVG_SUCCESS);
        response.setData(gradeAvgDto);

        return createResponse(response, headers, HttpStatus.OK);
    }

    /* 학년 평균 리스트 조회 */
    @Operation(summary = "학년 평균 리스트 조회")
    @GetMapping
    public ResponseEntity<Response> getGradeAvgList() {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        List<GradeAvgDto> gradeAvgList = gradeAvgService.getGradeAvgList().stream()
                .map(GradeAvgDto::toDto)
                .toList();

        response.setStatus(ResponseStatusCode.GET_GRADE_AVG_LIST_SUCCESS);
        response.setMessage(ResponseMessage.GET_GRADE_AVG_LIST_SUCCESS);
        response.setData(gradeAvgList);

        return createResponse(response, headers, HttpStatus.OK);
    }
    
    /* 학년 평균 삭제 */
    @Operation(summary = "학년 평균 삭제")
    @DeleteMapping("/{gradeAvgNo}")
    public ResponseEntity<Response> deleteGradeAvg(@PathVariable("gradeAvgNo") Long gradeAvgNo) {
        Response response = new Response();
        HttpHeaders headers = createHttpHeaders();

        gradeAvgService.deleteGradeAvg(gradeAvgNo);

        response.setStatus(ResponseStatusCode.DELETED_GRADE_AVG_SUCCESS);
        response.setMessage(ResponseMessage.DELETED_GRADE_AVG_SUCCESS);

        return createResponse(response, headers, HttpStatus.NO_CONTENT);
    }    
}
