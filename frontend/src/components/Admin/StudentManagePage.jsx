import React from "react";
import "../../css/StudentManagePage.css";

const students = [
  { id: 1, grade: "1학년", name: "김철수", school: "서울초등학교"},
  { id: 2, grade: "2학년", name: "이영희", school: "부산초등학교"},
];

const StudentManagePage = ({ setActiveTab }) => {
  const handleStudentClick = () => {
    setActiveTab("student-registration"); // 클릭 시 탭 상태를 변경
  };

  return (
    <div className="student-manage-content">
      <h2>학생 관리</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>학년</th>
              <th>이름</th>
              <th>학교</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} onClick={handleStudentClick} className="clickable-row">
                <td>{student.grade}</td>
                <td>{student.name}</td>
                <td>{student.school}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentManagePage;
