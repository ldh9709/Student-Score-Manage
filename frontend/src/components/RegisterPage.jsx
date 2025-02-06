import React, { useState } from "react";
import "../css/RegisterPage.css";
import * as teacherApi from "../api/teacherApi";
import * as responseStatusCode from "../api/responseStatusCode";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  
  /********************* 상태 관리 ****************************/
  const [teacher, setTeacher] = useState({
    teacherId: "",
    teacherName: "",
    teacherPassword: "",
    confirmPassword: ""
  });

  /********************* handle 함수 ****************************/
  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // 기본 동작 방지
    try {
      const responseJsonObject = await teacherApi.saveTeacher(teacher);
      if(responseJsonObject?.status === responseStatusCode.CREATED_TEACHER_SUCCESS) {
        navigate('/login');
      } else {
        navigate('/register')
      }

    } catch (error) {
      console.error("Error Register : ", error);
    }
    

  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>회원가입</h2>

        <form onSubmit={handleRegister}>
            {/* 아이디 입력 */}
            <div className="input-group">
                <label>아이디</label>
                <input
                type="text"
                placeholder="아이디를 입력하세요"
                name="teacherId"
                value={teacher.teacherId}
                onChange={handleChange}
                required
                />
            </div>

            {/* 비밀번호 입력 */}
            <div className="input-group">
                <label>비밀번호</label>
                <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                name="teacherPassword"
                value={teacher.teacherPassword}
                onChange={handleChange}
                required
                />
            </div>

            {/* 비밀번호 확인 입력 */}
            <div className="input-group">
                <label>비밀번호 확인</label>
                <input
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                name="confirmPassword"
                value={teacher.confirmPassword}
                onChange={handleChange}
                required
                />
            </div>

            {/* 이름 입력 */}
            <div className="input-group">
                <label>이름</label>
                <input
                type="text"
                placeholder="이름을 입력하세요"
                name="teacherName"
                value={teacher.teacherName}
                onChange={handleChange}
                required
                />
            </div>

            {/* 회원가입 버튼 */}
            <button type="submit" className="register-button">회원가입</button>
        </form>

        {/* 로그인 이동 링크 */}
        <p className="login-link">
          이미 계정이 있으신가요? <a href="/login">로그인</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
