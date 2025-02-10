import React from "react";
import "../css/Header.css";
import logo from "../image/logo.png";
import { useMemberAuth } from "../util/AuthContext";
import * as teacherApi from "../api/teacherApi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  /********************* 상태 관리 ****************************/
  const auth = useMemberAuth();
  const token = auth?.token || null;
  const navigate = useNavigate();

  // 로그아웃 처리
  const handleLogoutAction = async () => {
    try {
      await teacherApi.logout();
      auth.logout();
      navigate(`/main`);
    } catch (error) {
      console.error("로그아웃 실패: ", error);
    }
  };

  return (
    <header className="header">

      <div className="logo-and-menu">
        {/* 로고 */}
        <img src={logo} alt="logo" className="logo"/>
        {/* 메뉴 항목 */}
        <nav className="menu">
          <ul>
            {token ? (
              <>
              <li><a href="/main">메인</a></li>
              <li><a href="/admin">관리자 페이지</a></li>
              </>
            ) : (
              <li><a href="/main">메인</a></li>
            )}
          </ul>
        </nav>
      </div>

      {/* 로그인 및 회원가입 */}
      <div className="auth-links">
      {token ? (
          <a href="/logout" onClick={(e) => {
            e.preventDefault(); // 기본 링크 동작 방지
            handleLogoutAction(); // 로그아웃 함수 실행
          }}>
            로그아웃
          </a>
        ) : (
          <>
            <a href="/login">로그인</a>
            <a href="/register">회원가입</a>
          </>
        )}
      </div>

    </header>
  );
};

export default Header;
