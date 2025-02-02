import React, { useEffect, useState } from "react";
import "../../css/StudentManagePage.css";
import * as studentApi from "../../api/studentApi";


const StudentManagePage = ({ setActiveTab }) => {
  
  //학생 데이터 상태 관리
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태
  
  //학생 리스트 가져오기
  const getStudentList = async () => {
    const responseJsonObject = await studentApi.getStudentList();
    setStudents(responseJsonObject.data);
    setLoading(false);
  }
  
  //처음 렌더링될 때 학생 리스트 가져오기 실행
  useEffect(() => {
    getStudentList();
  }, []);

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
              <tr key={student.studentNo} onClick={handleStudentClick} className="clickable-row">
                <td>{student.studentGrade}</td>
                <td>{student.studentName}</td>
                <td>{student.studentSchool}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentManagePage;
