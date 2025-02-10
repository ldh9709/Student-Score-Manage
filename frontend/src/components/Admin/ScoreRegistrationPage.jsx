import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as scoreApi from "../../api/scoreApi";
import * as studentApi from "../../api/studentApi";
import * as subjectApi from "../../api/subjectApi";
import * as scoreTypeApi from "../../api/scoreTypeApi";
import { useMemberAuth } from "../../util/AuthContext"; // ✅ 인증 정보 가져오기

const ScoreRegistrationPage = () => {
  /* ✅ 인증 관리 */
  const auth = useMemberAuth();
  const token = auth?.token || null;

  /********************* 상태 관리 ****************************/
  const [students, setStudents] = useState([]);  
  const [scoreTypes, setScoreTypes] = useState([]);  
  const [subjects, setSubjects] = useState([]);  
  const [scores, setScores] = useState({
    studentNo: "",
    studentSchool: "",  
    studentGrade: "",  
    scoreTypeNo: "",
    scores: {}, 
  });

  /********************* API 호출 함수 ****************************/
  const getStudents = async () => {
    try {
      const responseJsonObject = await studentApi.getStudentList(token); // ✅ 토큰 추가
      setStudents(responseJsonObject.data);
    } catch (error) {
      console.error("학생 목록 불러오기 실패:", error);
    }
  };

  const getScoreTypes = async () => {
    try {
      const responseJsonObject = await scoreTypeApi.getScoreTypeList(token); // ✅ 토큰 추가
      setScoreTypes(responseJsonObject.data);
    } catch (error) {
      console.error("시험 유형 리스트 불러오기 실패:", error);
    }
  };

  const getSubjects = async () => {
    try {
      const responseJsonObject = await subjectApi.getSubjectList(token); // ✅ 토큰 추가
      setSubjects(responseJsonObject.data);
    } catch (error) {
      console.error("과목 리스트 불러오기 실패:", error);
    }
  };

  /********************* useEffect ****************************/
  useEffect(() => {
    getStudents();
    getScoreTypes();
    getSubjects();
  }, []);

  /********************* handle 함수 ****************************/
  const handleStudentChange = (e) => {
    const selectedStudentNo = e.target.value;
    const selectedStudent = students.find((s) => s.studentNo.toString() === selectedStudentNo);

    if (selectedStudent) {
      setScores((prev) => ({
        ...prev,
        studentNo: selectedStudent.studentNo,
        studentSchool: selectedStudent.studentSchool,
        studentGrade: selectedStudent.studentGrade,
        scoreTypeNo: "",  
        scores: {}, 
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scoreData = Object.keys(scores.scores).map((subjectNo) => ({
      studentNo: parseInt(scores.studentNo),
      subjectNo: parseInt(subjectNo),
      scoreTypeNo: scores.scoreTypeNo,
      scoreValue: scores.scores[subjectNo],
    }));

    try {
      await scoreApi.saveScores(scoreData, token); // ✅ 토큰 추가
      alert("성적 등록 완료!");
    } catch (error) {
      console.error("성적 등록 실패:", error);
    }
  };

  return (
    <div className="score-registration-content">
      <h2>점수 등록</h2>
      <form className="score-registration-form" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>이름</label></td>
              <td>
                <select name="studentNo" onChange={handleStudentChange}>
                  <option value="">학생 선택</option>
                  {students.map((student) => (
                    <option key={student.studentNo} value={student.studentNo}>
                      {student.studentName}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit" className="save-button">저장</button>
      </form>
    </div>
  );
};

export default ScoreRegistrationPage;
