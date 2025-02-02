-- School 데이터 삽입
INSERT INTO school (school_no, school_name) VALUES (1, '서울초등학교');
INSERT INTO school (school_no, school_name) VALUES (2, '부산초등학교');
INSERT INTO school (school_no, school_name) VALUES (3, '대구초등학교');

-- Grade 데이터 삽입
INSERT INTO grade (grade_no, grade_name) VALUES (1, '초등 1학년');
INSERT INTO grade (grade_no, grade_name) VALUES (2, '초등 2학년');
INSERT INTO grade (grade_no, grade_name) VALUES (3, '초등 3학년');
INSERT INTO grade (grade_no, grade_name) VALUES (4, '초등 4학년');
INSERT INTO grade (grade_no, grade_name) VALUES (5, '초등 5학년');
INSERT INTO grade (grade_no, grade_name) VALUES (6, '초등 6학년');

-- Subject 데이터 삽입
INSERT INTO subject (subject_no, subject_name) VALUES (1, '국어');
INSERT INTO subject (subject_no, subject_name) VALUES (2, '수학');
INSERT INTO subject (subject_no, subject_name) VALUES (3, '영어');
INSERT INTO subject (subject_no, subject_name) VALUES (4, '과학');
INSERT INTO subject (subject_no, subject_name) VALUES (5, '사회');

-- ScoreType 데이터 삽입
INSERT INTO score_type (score_type_no, score_type_name) VALUES (1, '중간고사');
INSERT INTO score_type (score_type_no, score_type_name) VALUES (2, '기말고사');
-- Student 데이터 삽입
INSERT INTO student (student_no, student_name, student_gender, student_birthday, student_grade,
    student_phone, student_parent_phone, student_address, student_detail_address, student_school, student_registration_date) 
VALUES (1, '김철수', 'M', TO_DATE('2007-05-10', 'YYYY-MM-DD'), '초등 1학년', '010-1111-2222', '010-3333-4444', '서울특별시 강남구 강남아파트', '110동 101호', '서울초등학교', TO_DATE('2024-01-01', 'YYYY-MM-DD'));

INSERT INTO student (student_no, student_name, student_gender, student_birthday, student_grade,
    student_phone, student_parent_phone, student_address, student_detail_address, student_school, student_registration_date) 
VALUES (2, '이영희', 'F', TO_DATE('2006-08-21', 'YYYY-MM-DD'), '초등 2학년', '010-2222-3333', '010-4444-5555', '부산광역시 해운대구 해운대아파트', '110동 202호', '부산초등학교', TO_DATE('2024-01-02', 'YYYY-MM-DD'));

INSERT INTO student (student_no, student_name, student_gender, student_birthday, student_grade,
    student_phone, student_parent_phone, student_address, student_detail_address, student_school, student_registration_date) 
VALUES (3, '박민수', 'M', TO_DATE('2005-11-15', 'YYYY-MM-DD'), '초등 3학년', '010-3333-4444', '010-5555-6666', '대구광역시 중구아파트', '110동 303호', '대구초등학교', TO_DATE('2024-01-03', 'YYYY-MM-DD'));

INSERT INTO student (student_no, student_name, student_gender, student_birthday, student_grade,
    student_phone, student_parent_phone, student_address, student_detail_address, student_school, student_registration_date) 
VALUES (4, '정다혜', 'F', TO_DATE('2007-03-05', 'YYYY-MM-DD'), '초등 1학년', '010-4444-5555', '010-6666-7777', '광주광역시 서구아파트', '110동 404호', '서울초등학교', TO_DATE('2024-01-04', 'YYYY-MM-DD'));

INSERT INTO student (student_no, student_name, student_gender, student_birthday, student_grade,
    student_phone, student_parent_phone, student_address, student_detail_address, student_school, student_registration_date) 
VALUES (5, '홍길동', 'M', TO_DATE('2006-09-12', 'YYYY-MM-DD'), '초등 2학년', '010-5555-6666', '010-7777-8888', '인천광역시 연수구아파트', '110동 505호', '서울초등학교', TO_DATE('2024-01-05', 'YYYY-MM-DD'));

INSERT INTO student (student_no, student_name, student_gender, student_birthday, student_grade,
    student_phone, student_parent_phone, student_address, student_detail_address, student_school, student_registration_date) 
VALUES (6, '김미진', 'F', TO_DATE('2005-07-30', 'YYYY-MM-DD'), '초등 3학년', '010-6666-7777', '010-8888-9999', '대전광역시 유성구아파트', '110동 606호', '서울초등학교', TO_DATE('2024-01-06', 'YYYY-MM-DD'));

-- Score 데이터 삽입
INSERT INTO score (score_no, score_value, score_rating, student_no, subject_no, score_type_no) VALUES (1, 85, 'B', 1, 1, 1);
INSERT INTO score (score_no, score_value, score_rating, student_no, subject_no, score_type_no) VALUES (2, 90, 'A', 2, 2, 2);
INSERT INTO score (score_no, score_value, score_rating, student_no, subject_no, score_type_no) VALUES (3, 70, 'C', 3, 3, 1);
INSERT INTO score (score_no, score_value, score_rating, student_no, subject_no, score_type_no) VALUES (4, 95, 'A+', 4, 4, 2);
INSERT INTO score (score_no, score_value, score_rating, student_no, subject_no, score_type_no) VALUES (5, 60, 'D', 5, 5, 1);
INSERT INTO score (score_no, score_value, score_rating, student_no, subject_no, score_type_no) VALUES (6, 80, 'B+', 6, 1, 2);

-- GradeAvg 데이터 삽입
INSERT INTO grade_avg (grade_avg_no, grade_avg_value, subject_no, score_type_no) VALUES (1, 82, 1, 1);
INSERT INTO grade_avg (grade_avg_no, grade_avg_value, subject_no, score_type_no) VALUES (2, 87, 2, 1);
INSERT INTO grade_avg (grade_avg_no, grade_avg_value, subject_no, score_type_no) VALUES (3, 75, 3, 1);
INSERT INTO grade_avg (grade_avg_no, grade_avg_value, subject_no, score_type_no) VALUES (4, 90, 4, 2);
INSERT INTO grade_avg (grade_avg_no, grade_avg_value, subject_no, score_type_no) VALUES (5, 65, 5, 2);
