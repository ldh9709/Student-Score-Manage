import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as scoreApi from "../../api/scoreApi";
import * as studentApi from "../../api/studentApi";
import * as subjectApi from "../../api/subjectApi";
import * as scoreTypeApi from "../../api/scoreTypeApi";

const ScoreRegistrationPage = () => {
  /********************* 상태 관리 ****************************/
  const [students, setStudents] = useState([]);  // 학생 목록
  const [scoreTypes, setScoreTypes] = useState([]);  // 시험 유형 목록
  const [subjects, setSubjects] = useState([]);  // 과목 목록
  const [scores, setScores] = useState({
    studentNo: "",
    studentSchool: "",  // 학교 저장
    studentGrade: "",  // 학년 저장
    scoreTypeNo: "",
    scores: {}, // 성적 입력 데이터 저장
  });

  /********************* API 호출 함수 ****************************/
  const getStudents = async () => {
    try {
      const responseJsonObject = await studentApi.getStudentList();
      setStudents(responseJsonObject.data);
    } catch (error) {
      console.error("학생 목록 불러오기 실패:", error);
    }
  };

  const getScoreTypes = async () => {
    try {
      const responseJsonObject = await scoreTypeApi.getScoreTypeList();
      setScoreTypes(responseJsonObject.data);
    } catch (error) {
      console.error("시험 유형 리스트 불러오기 실패:", error);
    }
  };

  const getSubjects = async () => {
    try {
      const responseJsonObject = await subjectApi.getSubjectList();
      setSubjects(responseJsonObject.data);
    } catch (error) {
      console.error("과목 리스트 불러오기 실패:", error);
    }
  };

  // 특정 학생의 기존 성적 가져오기
  const getScoreListByStudentNo = async (studentNo, scoreTypeNo) => {
    try {
      const responseJsonObject = await scoreApi.getScoreListByStudentNo(studentNo);
      const existingScores = responseJsonObject.data;

      // 기존 성적을 { subjectNo: scoreValue } 형식으로 변환
      const scoresMap = {};
      existingScores.forEach((score) => {
        if (score.scoreTypeNo === scoreTypeNo) {
          scoresMap[score.subjectNo] = score.scoreValue;
        }
      });

      // 기존 성적을 scores 상태에 반영
      setScores((prev) => ({
        ...prev,
        scores: scoresMap,
      }));
    } catch (error) {
      console.error("학생 성적 불러오기 실패:", error);
    }
  };

  /********************* useEffect ****************************/
  useEffect(() => {
    getStudents();
    getScoreTypes();
    getSubjects();
  }, []);

  /********************* handle 함수 ****************************/
  // 학생 선택 시 기존 성적 불러오기 + 학교, 학년 정보 저장
  const handleStudentChange = (e) => {
    const selectedStudentNo = e.target.value;
    const selectedStudent = students.find((s) => s.studentNo.toString() === selectedStudentNo);

    if (selectedStudent) {
      setScores((prev) => ({
        ...prev,
        studentNo: selectedStudent.studentNo,
        studentSchool: selectedStudent.studentSchool, // 학교 추가
        studentGrade: selectedStudent.studentGrade, // 학년 추가
        scoreTypeNo: "",  // 시험 유형 초기화
        scores: {}, // 기존 성적 초기화
      }));
    }
  };

  // 시험 유형 선택 시 기존 성적 불러오기
  const handleScoreTypeChange = (e) => {
    const selectedScoreTypeNo = parseInt(e.target.value);
    setScores((prev) => ({ ...prev, scoreTypeNo: selectedScoreTypeNo }));

    // 학생이 선택된 상태에서만 기존 성적을 불러옴
    if (scores.studentNo) {
      getScoreListByStudentNo(scores.studentNo, selectedScoreTypeNo);
    }
  };

  // 입력값 변경 핸들러
  const handleChange = (event) => {
    const { name, value } = event.target;

    setScores((prev) => ({
      ...prev,
      scores: { ...prev.scores, [name]: parseInt(value) || 0 },
    }));
  };

  // 점수 등록 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 서버에 보낼 데이터 구성
    const scoreData = Object.keys(scores.scores).map((subjectNo) => ({
      studentNo: parseInt(scores.studentNo),
      subjectNo: parseInt(subjectNo),
      scoreTypeNo: scores.scoreTypeNo,
      scoreValue: scores.scores[subjectNo],
      scoreRating: "B", // 예시 값, 등급 계산 로직 필요
    }));

    try {
      await scoreApi.saveScores(scoreData);
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
              <td><label>학년</label></td>
              <td><input type="text" name="studentGrade" value={scores.studentGrade} readOnly /></td>
            </tr>
            <tr>
              <td><label>학교</label></td>
              <td><input type="text" name="studentSchool" value={scores.studentSchool} readOnly /></td>
              <td><label>시험 유형</label></td>
              <td>
                <select name="scoreTypeNo" value={scores.scoreTypeNo || ""} onChange={handleScoreTypeChange}>
                  <option value="">시험 유형 선택</option>
                  {scoreTypes.map((scoreType) => (
                    <option key={scoreType.scoreTypeNo} value={scoreType.scoreTypeNo}>
                      {scoreType.scoreTypeName}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <br/>

        {/* 과목 점수 입력 */}
        <table>
          <tbody>
            {subjects.length > 0 ? (
              subjects.map((subject, index) =>
                index % 2 === 0 ? ( // 2열 구조 유지
                  <tr key={subject.subjectNo}>
                    <td><label>{subject.subjectName}</label></td>
                    <td>
                      <input
                        type="text"
                        name={subject.subjectNo}
                        value={scores.scores[subject.subjectNo] || ""}
                        onChange={handleChange}
                      />
                    </td>
                    {index + 1 < subjects.length && (
                      <>
                        <td><label>{subjects[index + 1].subjectName}</label></td>
                        <td>
                          <input
                            type="text"
                            name={subjects[index + 1].subjectNo}
                            value={scores.scores[subjects[index + 1].subjectNo] || ""}
                            onChange={handleChange}
                          />
                        </td>
                      </>
                    )}
                  </tr>
                ) : null
              )
            ) : (
              <tr>
                <td colSpan="4">과목 정보를 불러오는 중...</td>
              </tr>
            )}
          </tbody>
        </table>

        <button type="submit" className="save-button">저장</button>
      </form>
    </div>
  );
};

export default ScoreRegistrationPage;
