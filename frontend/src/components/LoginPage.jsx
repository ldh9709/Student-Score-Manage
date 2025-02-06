import React, { useState } from "react";
import "../css/LoginPage.css";
import * as teacherApi from "../api/teacherApi";
import { useNavigate } from "react-router-dom";
import { useMemberAuth } from "../util/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useMemberAuth();
  
  /********************* 상태 관리 ****************************/
  const [teacher, setTeacher] = useState({
    teacherId: "",
    teacherPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태 추가

  /********************* handle 함수 ****************************/
  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // ✅ 기본 동작 방지

    try {
      const responseJsonObject = await teacherApi.loginAction(teacher); 

      login(responseJsonObject.accessToken);

      navigate("/admin");
      
    } catch (error) {
      console.error("로그인 실패:", error); // ❗ 오류 로그 출력
      setErrorMessage("아이디와 비밀번호를 다시 확인해주세요.");
      }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>로그인</h2>

        <form onSubmit={handleLogin}>
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

          {/* 로그인 실패 시 메시지 표시 */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* 로그인 버튼 */}
          <button type="submit" className="login-button">로그인</button>
        </form>

        {/* 회원가입 링크 */}
        <p className="signup-link">
          계정이 없으신가요? <a href="/register">회원가입</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
