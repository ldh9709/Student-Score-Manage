import React, { useState } from "react";
import "../../css/RegistrationPage.css";
import * as studentApi from "../../api/studentApi";

const StudentRegistrationPage = () => {
  // 학생 정보 상태 관리
  const [student, setStudent] = useState({
    studentName: "",
    studentGender: "",
    studentSchool: "",
    studentBirthday: "",
    studentGrade: "",
    studentRegistrationDate: "",
    studentParentPhone: "",
    studentPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // 구조 분해 할당
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 이벤트 방지
  
    try {
      await studentApi.saveStudent(student); // API 호출
      
      // 입력 필드 초기화
      setStudent({
        studentName: "",
        studentGender: "",
        studentSchool: "",
        studentBirthday: "",
        studentGrade: "",
        studentRegistrationDate: "",
        studentParentPhone: "",
        studentPhone: "",
      });
    } catch (error) {
      console.error("Error saving student:", error); // 콘솔에 에러 출력
      alert("학생 등록에 실패했습니다."); // 실패 알림
    }
  };

  return (
    <div className="student-registration-content">
      <h2>학생 등록</h2>
      <form className="student-registration-form">
        <table>
          <tbody>

            <tr>
              <td><label>이름</label></td>
              <td><input type="text" name="studentName" /></td>
              <td><label>성별</label></td>
              <td>
                <input type="radio" name="gender" value="male" /> 남
                <input type="radio" name="gender" value="female" /> 여
              </td>
            </tr>

            <tr>
              <td><label>학교</label></td>
              <td><input type="text" name="birthDate" /></td>
              
              <td><label>생년월일</label></td>
              <td><input type="date" name="birthDate" /></td>
            </tr>
            
            <tr>
              <td><label>학년</label></td>
              <td>
                <select name="grade">
                  <option value="1">초등 1학년</option>
                  <option value="2">초등 2학년</option>
                  <option value="3">초등 3학년</option>
                </select>
              </td>
              <td><label>등록일</label></td>
              <td><input type="text" name="birthDate" /></td>
            </tr>     

            <tr>
              <td><label>부모님 전화번호</label></td>
              <td><input type="text" name="birthDate" /></td>
              <td><label>학생 전화번호</label></td>
              <td><input type="text" name="birthDate" /></td>
            </tr>     

          </tbody>
        </table>
        <button type="submit" className="save-button">저장</button>
      </form>
    </div>
  );
};

export default StudentRegistrationPage;
