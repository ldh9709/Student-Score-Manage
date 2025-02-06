import React from "react";
import bannerImage from "../image/배너2.jpg";
import 학생등록 from "../image/학생등록.png";
import 성적관리 from "../image/성적관리.png";
import "../css/MainPage.css"; 
import Footer from "../layout/Footer";

const MainPage = () => {
  return (
    <div className="main-content">
      <div className="banner">
        <img src={bannerImage} alt="배너 이미지" className="banner-image" />
      </div>

      <div className="text-container">
        <h2 className="highlight-text">
          <span className="blue-text">현명한 선생님</span>들의 <strong>선택!</strong>
        </h2>
        <p className="description">
          이미 <strong>수 많은 </strong> 선생님들이 <strong>저희 SSM</strong>을 선택하셨습니다.
        </p>
      </div>

      <div className="background-gray-container">
        <h2 className="highlight-text">성적 관리</h2>
        <p className="description">학생들의 성적을 한 곳에서 <strong>체계적으로</strong> 관리해보세요!</p>
        <img src={성적관리} alt="성적 관리" className="feature-icon" />
      </div>

      <div className="background-gray-container">
        <h2 className="highlight-text">학생 등록</h2>
        <p className="description">학생 정보를 <strong>간편하게</strong> 등록하고 관리하세요.</p>
        <img src={학생등록} alt="학생 등록" className="feature-icon" />
      </div>

      {/* ✅ 푸터 추가 */}
      <Footer />
    </div>
  );
};

export default MainPage;
