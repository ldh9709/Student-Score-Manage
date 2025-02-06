package backend.response;

public class ResponseStatusCode {

    /******************* TEACHER 메시지 2000 ~ 2099 ************************/
    public static final int CREATED_TEACHER_SUCCESS = 2000; // 회원 가입 성공
    public static final int UPDATED_TEACHER_SUCCESS = 2001; // 회원 수정 성공
    public static final int GET_TEACHER_SUCCESS = 2002; // 회원 조회 성공
    public static final int GET_TEACHER_LIST_SUCCESS = 2003; // 회원 리스트 조회 성공
    public static final int DELETED_TEACHER_SUCCESS = 2004; // 회원 삭제 성공
    public static final int TEACHER_OPERATION_FAILED = 2050; // 회원 작업 실패

    /******************* STUDENT 메시지 2100 ~ 2199 ************************/
    public static final int CREATED_STUDENT_SUCCESS = 2100; // 학생 추가 성공
    public static final int UPDATED_STUDENT_SUCCESS = 2101; // 학생 수정 성공
    public static final int GET_STUDENT_SUCCESS = 2102; // 학생 조회 성공
    public static final int GET_STUDENT_LIST_SUCCESS = 2103; // 학생 리스트 조회 성공
    public static final int DELETED_STUDENT_SUCCESS = 2104; // 학생 삭제 성공
    public static final int STUDENT_OPERATION_FAILED = 2150; // 학생 작업 실패

    /******************* SCORE 메시지 2200 ~ 2299 ************************/
    public static final int CREATED_SCORE_SUCCESS = 2200; // 성적 추가 성공
    public static final int UPDATED_SCORE_SUCCESS = 2201; // 성적 수정 성공
    public static final int GET_SCORE_SUCCESS = 2202; // 성적 조회 성공
    public static final int GET_SCORE_LIST_SUCCESS = 2203; // 성적 리스트 조회 성공
    public static final int DELETED_SCORE_SUCCESS = 2204; // 성적 삭제 성공
    public static final int SCORE_OPERATION_FAILED = 2250; // 성적 작업 실패

    /******************* SCORE_TYPE 메시지 2300 ~ 2399 ************************/
    public static final int CREATED_SCORE_TYPE_SUCCESS = 2300; // 성적 유형 추가 성공
    public static final int UPDATED_SCORE_TYPE_SUCCESS = 2301; // 성적 유형 수정 성공
    public static final int GET_SCORE_TYPE_SUCCESS = 2302; // 성적 유형 조회 성공
    public static final int GET_SCORE_TYPE_LIST_SUCCESS = 2303; // 성적 유형 리스트 조회 성공
    public static final int DELETED_SCORE_TYPE_SUCCESS = 2304; // 성적 유형 삭제 성공
    public static final int SCORE_TYPE_OPERATION_FAILED = 2350; // 성적 유형 작업 실패

    /******************* SCHOOL 메시지 2400 ~ 2499 ************************/
    public static final int CREATED_SCHOOL_SUCCESS = 2400; // 학교 추가 성공
    public static final int UPDATED_SCHOOL_SUCCESS = 2401; // 학교 수정 성공
    public static final int GET_SCHOOL_SUCCESS = 2402; // 학교 조회 성공
    public static final int GET_SCHOOL_LIST_SUCCESS = 2403; // 학교 리스트 조회 성공
    public static final int DELETED_SCHOOL_SUCCESS = 2404; // 학교 삭제 성공
    public static final int SCHOOL_OPERATION_FAILED = 2450; // 학교 작업 실패

    /******************* GRADE 메시지 2500 ~ 2599 ************************/
    public static final int CREATED_GRADE_SUCCESS = 2500; // 학년 추가 성공
    public static final int UPDATED_GRADE_SUCCESS = 2501; // 학년 수정 성공
    public static final int GET_GRADE_SUCCESS = 2502; // 학년 조회 성공
    public static final int GET_GRADE_LIST_SUCCESS = 2503; // 학년 리스트 조회 성공
    public static final int DELETED_GRADE_SUCCESS = 2504; // 학년 삭제 성공
    public static final int GRADE_OPERATION_FAILED = 2550; // 학년 작업 실패

    /******************* GRADE_AVG 메시지 2600 ~ 2699 ************************/
    public static final int CREATED_GRADE_AVG_SUCCESS = 2600; // 학년 평균 추가 성공
    public static final int UPDATED_GRADE_AVG_SUCCESS = 2601; // 학년 평균 수정 성공
    public static final int GET_GRADE_AVG_SUCCESS = 2602; // 학년 평균 조회 성공
    public static final int GET_GRADE_AVG_LIST_SUCCESS = 2603; // 학년 평균 리스트 조회 성공
    public static final int DELETED_GRADE_AVG_SUCCESS = 2604; // 학년 평균 삭제 성공
    public static final int GRADE_AVG_OPERATION_FAILED = 2650; // 학년 평균 작업 실패

    /******************* SUBJECT 메시지 2700 ~ 2799 ************************/
    public static final int CREATED_SUBJECT_SUCCESS = 2700; // 과목 추가 성공
    public static final int UPDATED_SUBJECT_SUCCESS = 2701; // 과목 수정 성공
    public static final int GET_SUBJECT_SUCCESS = 2702; // 과목 조회 성공
    public static final int GET_SUBJECT_LIST_SUCCESS = 2703; // 과목 리스트 조회 성공
    public static final int DELETED_SUBJECT_SUCCESS = 2704; // 과목 삭제 성공
    public static final int SUBJECT_OPERATION_FAILED = 2750; // 과목 작업 실패

    /******************* 일반적인 오류 메시지 **********************/
    public static final int INTERNAL_SERVER_ERROR = 10000; // 서버 내부 오류가 발생했습니다. 나중에 다시 시도해주세요.
}
