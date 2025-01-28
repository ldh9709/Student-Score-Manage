package response;

public class ResponseStatusCode {

    /******************* TEACHER 메시지 2000 ~ 2099 ************************/
    public static final int CREATED_TEACHER_SUCCESS = 2000;
    public static final int UPDATED_TEACHER_SUCCESS = 2001;
    public static final int GET_TEACHER_SUCCESS = 2002;
    public static final int GET_TEACHER_LIST_SUCCESS = 2003; // 리스트 조회 성공 코드 추가
    public static final int DELETED_TEACHER_SUCCESS = 2004;
    public static final int TEACHER_OPERATION_FAILED = 2050;

    /******************* STUDENT 메시지 2100 ~ 2199 ************************/
    public static final int CREATED_STUDENT_SUCCESS = 2100;
    public static final int UPDATED_STUDENT_SUCCESS = 2101;
    public static final int GET_STUDENT_SUCCESS = 2102;
    public static final int GET_STUDENT_LIST_SUCCESS = 2103; // 리스트 조회 성공 코드 추가
    public static final int DELETED_STUDENT_SUCCESS = 2104;
    public static final int STUDENT_OPERATION_FAILED = 2150;

    /******************* SCORE 메시지 2200 ~ 2299 ************************/
    public static final int CREATED_SCORE_SUCCESS = 2200;
    public static final int UPDATED_SCORE_SUCCESS = 2201;
    public static final int GET_SCORE_SUCCESS = 2202;
    public static final int GET_SCORE_LIST_SUCCESS = 2203; // 리스트 조회 성공 코드 추가
    public static final int DELETED_SCORE_SUCCESS = 2204;
    public static final int SCORE_OPERATION_FAILED = 2250;

    /******************* SCORE_TYPE 메시지 2300 ~ 2399 ************************/
    public static final int CREATED_SCORE_TYPE_SUCCESS = 2300;
    public static final int UPDATED_SCORE_TYPE_SUCCESS = 2301;
    public static final int GET_SCORE_TYPE_SUCCESS = 2302;
    public static final int GET_SCORE_TYPE_LIST_SUCCESS = 2303; // 리스트 조회 성공 코드 추가
    public static final int DELETED_SCORE_TYPE_SUCCESS = 2304;
    public static final int SCORE_TYPE_OPERATION_FAILED = 2350;

    /******************* SCHOOL 메시지 2400 ~ 2499 ************************/
    public static final int CREATED_SCHOOL_SUCCESS = 2400;
    public static final int UPDATED_SCHOOL_SUCCESS = 2401;
    public static final int GET_SCHOOL_SUCCESS = 2402;
    public static final int GET_SCHOOL_LIST_SUCCESS = 2403; // 리스트 조회 성공 코드 추가
    public static final int DELETED_SCHOOL_SUCCESS = 2404;
    public static final int SCHOOL_OPERATION_FAILED = 2450;

    /******************* GRADE 메시지 2500 ~ 2599 ************************/
    public static final int CREATED_GRADE_SUCCESS = 2500;
    public static final int UPDATED_GRADE_SUCCESS = 2501;
    public static final int GET_GRADE_SUCCESS = 2502;
    public static final int GET_GRADE_LIST_SUCCESS = 2503; // 리스트 조회 성공 코드 추가
    public static final int DELETED_GRADE_SUCCESS = 2504;
    public static final int GRADE_OPERATION_FAILED = 2550;

    /******************* GRADE_AVG 메시지 2600 ~ 2699 ************************/
    public static final int CREATED_GRADE_AVG_SUCCESS = 2600;
    public static final int UPDATED_GRADE_AVG_SUCCESS = 2601;
    public static final int GET_GRADE_AVG_SUCCESS = 2602;
    public static final int GET_GRADE_AVG_LIST_SUCCESS = 2603; // 리스트 조회 성공 코드 추가
    public static final int DELETED_GRADE_AVG_SUCCESS = 2604;
    public static final int GRADE_AVG_OPERATION_FAILED = 2650;

    /******************* SUBJECT 메시지 2700 ~ 2799 ************************/
    public static final int CREATED_SUBJECT_SUCCESS = 2700;
    public static final int UPDATED_SUBJECT_SUCCESS = 2701;
    public static final int GET_SUBJECT_SUCCESS = 2702;
    public static final int GET_SUBJECT_LIST_SUCCESS = 2703; // 이미 존재
    public static final int DELETED_SUBJECT_SUCCESS = 2704;
    public static final int SUBJECT_OPERATION_FAILED = 2750;

    /******************* 일반적인 오류 메시지 **********************/
    public static final int INTERNAL_SERVER_ERROR = 10000;
}
