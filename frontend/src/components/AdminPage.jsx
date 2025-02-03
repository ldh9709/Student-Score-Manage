import React, { useState } from "react";
import "../css/AdminPage.css";
import AdminMainPage from "./Admin/AdminMainPage";
import StudentRegistrationPage from "./Admin/StudentRegistrationPage";
import StudentManagePage from "./Admin/StudentManagePage";
import ScoreManagePage from "./Admin/ScoreManagePage";
import ScoreRegistrationPage from "./Admin/ScoreRegistrationPage";
import SubjectsRegistrationPage from "./Admin/SubjectsRegistrationPage";
const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("main");
  const [selectedStudentNo, setSelectedStudentNo] = useState(null);
  
  // 탭 클릭 시 실행되는 함수
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="admin-page">
      {/* 사이드바 */}
      <aside className="sidebar">
        <ul>
          <li onClick={() => handleTabClick("main")}>메인</li>
          <li onClick={() => handleTabClick("student-registration")}>학생 등록</li>
          <li onClick={() => handleTabClick("student-manage")}>학생 관리</li>
          <li onClick={() => handleTabClick("score-registration")}>성적 등록</li>
          <li onClick={() => handleTabClick("score-manage")}>성적 관리</li>
          <li onClick={() => handleTabClick("subjects-registration")}>과목 관리</li>
        </ul>
      </aside>

      {/* 콘텐츠 */}
      <div className="admin-content">
        {activeTab === "main" && <AdminMainPage />}
        {activeTab === "student-registration" && <StudentRegistrationPage />}
        {activeTab === "student-manage" && (<StudentManagePage setActiveTab={setActiveTab} setSelectedStudentNo={setSelectedStudentNo} /> )}
        {activeTab === "score-manage" && (<ScoreManagePage selectedStudentNo={selectedStudentNo} />)}
        {activeTab === "score-registration" && <ScoreRegistrationPage />}
        {activeTab === "subjects-registration" && <SubjectsRegistrationPage />}
      </div>
    </div>
  );
};

export default AdminPage;
