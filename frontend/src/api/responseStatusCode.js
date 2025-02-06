// 성공 코드 (2000 ~ 2049)
export const CREATED_TEACHER_SUCCESS = 2000; // 회원 가입 성공
export const READ_TEACHER_SUCCESS = 2001; // 회원 조회 성공
export const READ_TEACHER_LIST_SUCCESS = 2002; // 회원 리스트 조회 성공
export const UPDATE_TEACHER_SUCCESS = 2003; // 회원 정보 수정 성공
export const DELETE_TEACHER_SUCCESS = 2004; // 회원 삭제 성공
export const LOGIN_TEACHER_SUCCESS = 2005; // 회원 로그인 성공
export const LOGOUT_TEACHER_SUCCESS = 2006; // 회원 로그아웃 성공
export const ACTIVATE_TEACHER_SUCCESS = 2007; // 회원 활성화 성공
export const DEACTIVATE_TEACHER_SUCCESS = 2008; // 회원 비활성화 성공
export const PASSWORD_RESET_SUCCESS = 2009; // 비밀번호 재설정 성공
export const EMAIL_SEND_SUCCESS = 2010; // 이메일 발송 성공
export const INPUTCODE_CONFIRM_SUCCESS = 2011; // 인증 코드 확인 성공
export const UPDATE_ROLE_SUCCESS = 2012; // 회원 권한 수정 성공
export const CONFIRM_EMAIL_SUCCESS = 2013; // 이메일 인증 성공

// 실패 코드 (2050 ~ )
export const CREATED_TEACHER_FAIL = 2050; // 회원 생성 실패
export const INVALID_AUTH_CODE = 2051; // 인증 코드 불일치
export const READ_TEACHER_FAIL = 2052; // 특정 회원 조회 실패
export const READ_TEACHER_LIST_FAIL = 2053; // 회원 리스트 조회 실패
export const UPDATE_TEACHER_FAIL = 2054; // 회원 정보 수정 실패
export const DELETE_TEACHER_FAIL = 2055; // 회원 삭제 실패
export const LOGIN_TEACHER_FAIL = 2056; // 회원 로그인 실패
export const PASSWORD_RESET_FAIL = 2057; // 비밀번호 재설정 실패
export const EMAIL_SEND_FAIL = 2058; // 이메일 발송 실패
export const INPUTCODE_CONFIRM_FAIL = 2059; // 인증 코드 확인 실패
export const MEMBER_PROVIDER_IS_NOT_EMAIL = 2060; // 이메일로 가입한 회원이 아님
export const AUTHENTICATION_FAILED = 2061; // 토큰과 정보가 일치하지 않음
export const UPDATE_ROLE_FAIL = 2062; // 회원 권한 수정 실패
export const DUPLICATION_TEACHER_ID = 2063; // 아이디 중복
export const DUPLICATION_TEACHER_EMAIL = 2064; // 이메일 중복
export const NOT_FOUND_TEACHER = 2065; // 가입하려는 회원정보 없음
export const NOT_AGREEMENT_TEACHER_ID = 2066; // 회원 ID와 정보가 일치하지 않음
export const NOT_AGREEMENT_TEACHER_NAME = 2067; // 회원 이름과 정보가 일치하지 않음
export const INPUT_NULL = 2068; // NULL 값 입력

// 학생 관련 코드 (2100 ~ 2149)
export const CREATED_STUDENT_SUCCESS = 2100; // 학생 추가 성공
export const READ_STUDENT_SUCCESS = 2101; // 학생 조회 성공
export const READ_STUDENT_LIST_SUCCESS = 2102; // 학생 리스트 조회 성공
export const UPDATE_STUDENT_SUCCESS = 2103; // 학생 수정 성공
export const DELETE_STUDENT_SUCCESS = 2104; // 학생 삭제 성공

// 학생 실패 코드 (2150 ~ )
export const CREATED_STUDENT_FAIL = 2150; // 학생 추가 실패
export const READ_STUDENT_FAIL = 2151; // 학생 조회 실패
export const READ_STUDENT_LIST_FAIL = 2152; // 학생 리스트 조회 실패
export const UPDATE_STUDENT_FAIL = 2153; // 학생 수정 실패
export const DELETE_STUDENT_FAIL = 2154; // 학생 삭제 실패

// 성적 관련 코드 (2200 ~ 2249)
export const CREATED_SCORE_SUCCESS = 2200; // 성적 추가 성공
export const READ_SCORE_SUCCESS = 2201; // 성적 조회 성공
export const READ_SCORE_LIST_SUCCESS = 2202; // 성적 리스트 조회 성공
export const UPDATE_SCORE_SUCCESS = 2203; // 성적 수정 성공
export const DELETE_SCORE_SUCCESS = 2204; // 성적 삭제 성공

// 성적 실패 코드 (2250 ~ )
export const CREATED_SCORE_FAIL = 2250; // 성적 추가 실패
export const READ_SCORE_FAIL = 2251; // 성적 조회 실패
export const READ_SCORE_LIST_FAIL = 2252; // 성적 리스트 조회 실패
export const UPDATE_SCORE_FAIL = 2253; // 성적 수정 실패
export const DELETE_SCORE_FAIL = 2254; // 성적 삭제 실패

// 성적 유형 관련 코드 (2300 ~ 2349)
export const CREATED_SCORE_TYPE_SUCCESS = 2300; // 성적 유형 추가 성공
export const READ_SCORE_TYPE_SUCCESS = 2301; // 성적 유형 조회 성공
export const READ_SCORE_TYPE_LIST_SUCCESS = 2302; // 성적 유형 리스트 조회 성공
export const UPDATE_SCORE_TYPE_SUCCESS = 2303; // 성적 유형 수정 성공
export const DELETE_SCORE_TYPE_SUCCESS = 2304; // 성적 유형 삭제 성공

// 성적 유형 실패 코드 (2350 ~ )
export const CREATED_SCORE_TYPE_FAIL = 2350; // 성적 유형 추가 실패
export const READ_SCORE_TYPE_FAIL = 2351; // 성적 유형 조회 실패
export const READ_SCORE_TYPE_LIST_FAIL = 2352; // 성적 유형 리스트 조회 실패
export const UPDATE_SCORE_TYPE_FAIL = 2353; // 성적 유형 수정 실패
export const DELETE_SCORE_TYPE_FAIL = 2354; // 성적 유형 삭제 실패

// 학교 관련 코드 (2400 ~ 2449)
export const CREATED_SCHOOL_SUCCESS = 2400; // 학교 추가 성공
export const READ_SCHOOL_SUCCESS = 2401; // 학교 조회 성공
export const READ_SCHOOL_LIST_SUCCESS = 2402; // 학교 리스트 조회 성공
export const UPDATE_SCHOOL_SUCCESS = 2403; // 학교 수정 성공
export const DELETE_SCHOOL_SUCCESS = 2404; // 학교 삭제 성공

// 학교 실패 코드 (2450 ~ )
export const CREATED_SCHOOL_FAIL = 2450; // 학교 추가 실패
export const READ_SCHOOL_FAIL = 2451; // 학교 조회 실패
export const READ_SCHOOL_LIST_FAIL = 2452; // 학교 리스트 조회 실패
export const UPDATE_SCHOOL_FAIL = 2453; // 학교 수정 실패
export const DELETE_SCHOOL_FAIL = 2454; // 학교 삭제 실패

// 일반적인 오류 코드
export const INTERNAL_SERVER_ERROR = 10000; // 서버 내부 오류가 발생했습니다. 나중에 다시 시도해주세요.
