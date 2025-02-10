import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as studentApi from "../../api/studentApi";
import * as gradeApi from "../../api/gradeApi";
import { useParams } from "react-router-dom";
import { useMemberAuth } from "../../util/AuthContext"; //  인증 정보 가져오기

const StudentModifyPage = ({ setActiveTab, selectedStudentNo, setSelectedStudentNo }) => { 

  /*  인증 관리 */
  const auth = useMemberAuth();
  const token = auth?.token || null;

  /********************* 상태 관리 ****************************/
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

  // URL에서 studentNo 가져오기
  const { studentNo } = useParams();

  // **선택한 학생 번호 가져오기 (selectedStudentNo가 있으면 우선 사용)**
  const studentId = selectedStudentNo || studentNo;

  /********************* API 호출 함수 ****************************/
  // 학년 데이터 가져오기
  const getGradeList = async () => {
    try {
      const responseJsonObject = await gradeApi.getGradeList(token); 
      setGradeList(responseJsonObject.data);
    } catch (error) {
      console.error("학년 리스트 불러오기 실패:", error);
    }
  };

  // 학생 정보 가져오기
  const getStudentByStudentNo = async () => {
    if (!studentId) return; //  studentId가 없으면 API 호출하지 않음

    try {
      console.log(`Fetching student with ID: ${studentId}`); // 디버깅 로그 추가
      const studentData = await studentApi.getStudentByStudentNo(studentId, token); 
      setStudent(studentData.data);
    } catch (error) {
      console.error("학생 정보 불러오기 오류:", error);
    }
  };

  /********************* useEffect ****************************/
  // **최초 마운트 시 학년 리스트 가져오기**
  useEffect(() => {
    getGradeList();
  }, []);

  // **studentId가 변경될 때만 학생 정보 가져오기**
  useEffect(() => {
    if (studentId) {
      getStudentByStudentNo();
    }
  }, [studentId]); //  studentId가 변경될 때만 실행

  /********************* 핸들러 함수 ****************************/
  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  // 학생 수정 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await studentApi.updateStudent(studentId, student, token); 
      alert("학생 정보가 성공적으로 수정되었습니다.");
    } catch (error) {
      console.error("학생 수정 실패:", error);
      alert("학생 수정에 실패했습니다.");
    }
  };

  return (
    <div className="student-registration-content">
      <h2>학생 수정</h2>
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
                    <option key={grade.gradeNo} value={grade.gradeName}>{grade.gradeName}</option>
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

export default StudentModifyPage;
