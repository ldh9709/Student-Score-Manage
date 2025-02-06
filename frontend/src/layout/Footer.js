import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#">회사소개</a>
          <a href="#">학원회원 이용약관</a>
          <a href="#">최종회원 이용약관</a>
          <a href="#">개인정보처리방침</a>
          <a href="#">제휴문의</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
