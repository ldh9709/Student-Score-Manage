import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as studentApi from "../../api/studentApi";
import * as gradeApi from "../../api/gradeApi";
import { useMemberAuth } from "../..//util/AuthContext";

const StudentRegistrationPage = () => {
  /* 인증 관리 */
  const auth = useMemberAuth();
  const token = auth?.token || null;

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
    studentAddress: "",
    studentDetailAddress: "",
  });

  // 학년 리스트 상태 관리
  const [gradeList, setGradeList] = useState([]);

  // 학년 데이터 가져오기
  const getGradeList = async () => {
    try {
      const responseJsonObject = await gradeApi.getGradeList(token);
      setGradeList(responseJsonObject.data);
    } catch (error) {
      console.error("학년 리스트 불러오기 실패:", error);
    }
  };

  // 처음 페이지 로드될 때 학년 리스트 가져오기
  useEffect(() => {
    getGradeList();
  }, []);
  
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
      await studentApi.saveStudent(student, token); // API 호출
      alert("학생이 성공적으로 등록되었습니다."); // 성공 메시지 추가

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
        studentAddress: "",
        studentDetailAddress: "",
      });
    } catch (error) {
      console.error("Error saving student:", error); // 콘솔에 에러 출력
      alert("학생 등록에 실패했습니다."); // 실패 알림
    }
  };

  return (
    <div className="student-registration-content">
      <h2>학생 등록</h2>
      <form className="student-registration-form" onSubmit={handleSubmit}>
        <table>
          <tbody>

            <tr>
              <td><label>이름</label></td>
              <td><input type="text" name="studentName" value={student.studentName} onChange={handleChange} /></td>
              <td><label>성별</label></td>
              <td>
                <input type="radio" name="studentGender" value="M" checked={student.studentGender === "M"} onChange={handleChange} /> 남
                <input type="radio" name="studentGender" value="F" checked={student.studentGender === "F"} onChange={handleChange} /> 여
              </td>
            </tr>

            <tr>
              <td><label>학교</label></td>
              <td><input type="text" name="studentSchool" value={student.studentSchool} onChange={handleChange} /></td>
              
              <td><label>생년월일</label></td>
              <td><input type="date" name="studentBirthday" value={student.studentBirthday} onChange={handleChange} /></td>
            </tr>
            
            <tr>
              <td><label>학년</label></td>
              <td>
                <select name="studentGrade" value={student.studentGrade} onChange={handleChange} required>
                  <option value="">선택</option>
                  {gradeList.map((grade) => (
                    <option key={grade.gradeNo} value={grade.gradeName}>{grade.gradeName} </option>
                  ))}
                </select>
              </td>
              <td><label>등록일</label></td>
              <td><input type="date" name="studentRegistrationDate" value={student.studentRegistrationDate} onChange={handleChange} /></td>
            </tr>     

            <tr>
              <td><label>부모님 전화번호</label></td>
              <td><input type="text" name="studentParentPhone" value={student.studentParentPhone} onChange={handleChange} /></td>
              <td><label>학생 전화번호</label></td>
              <td><input type="text" name="studentPhone" value={student.studentPhone} onChange={handleChange} /></td>
            </tr>     

            <tr>
              <td><label>주소</label></td>
              <td><input type="text" name="studentAddress" value={student.studentAddress} onChange={handleChange} /></td>
              <td><label>상세 주소</label></td>
              <td><input type="text" name="studentDetailAddress" value={student.studentDetailAddress} onChange={handleChange} /></td>
            </tr>     

          </tbody>
        </table>
        <button type="submit" className="save-button">저장</button>
      </form>
    </div>
  );
};

export default StudentRegistrationPage;
