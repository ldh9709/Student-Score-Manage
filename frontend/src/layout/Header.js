import React from "react";
import "../css/Header.css";
import logo from "../image/logo.png"; // 로고 이미지를 불러옵니다.

const Header = () => {
  return (
    <header className="header">

      <div className="logo-and-menu">
        {/* 로고 */}
        <img src={logo} alt="logo" className="logo"/>
        {/* 메뉴 항목 */}
        <nav className="menu">
          <ul>
            <li><a href="/students">메인</a></li>
            <li><a href="/admin">관리자 페이지</a></li>
          </ul>
        </nav>
      </div>

      {/* 로그인 및 회원가입 */}
      <div className="auth-links">
        <a href="/login">로그인</a>
        <a href="/signup">회원가입</a>
      </div>

    </header>
  );
};

export default Header;
