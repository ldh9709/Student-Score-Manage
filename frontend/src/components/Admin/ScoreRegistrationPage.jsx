import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as scoreApi from "../../api/scoreApi";
import * as studentApi from "../../api/studentApi";
import * as subjectApi from "../../api/subjectApi";
import * as scoreTypeApi from "../../api/scoreTypeApi";
import { useMemberAuth } from "../../util/AuthContext"; //  인증 정보 가져오기

const ScoreRegistrationPage = () => {
  /*  인증 관리 */
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

  // (1) 이미 등록된 성적이 있는지 여부
  const [isUpdate, setIsUpdate] = useState(false);

  /********************* API 호출 함수 ****************************/
  const getStudents = async () => {
    try {
      const responseJsonObject = await studentApi.getStudentList(token);
      setStudents(responseJsonObject.data);
    } catch (error) {
      console.error("학생 목록 불러오기 실패:", error);
    }
  };

  const getScoreTypes = async () => {
    try {
      const responseJsonObject = await scoreTypeApi.getScoreTypeList(token);
      setScoreTypes(responseJsonObject.data);
    } catch (error) {
      console.error("시험 유형 리스트 불러오기 실패:", error);
    }
  };

  const getSubjects = async () => {
    try {
      const responseJsonObject = await subjectApi.getSubjectList(token);
      setSubjects(responseJsonObject.data);
    } catch (error) {
      console.error("과목 리스트 불러오기 실패:", error);
    }
  };

  const getScoreListByStudentNo = async (studentNo, scoreTypeNo) => {
    try {
      const responseJsonObject = await scoreApi.getScoreListByStudentNo(studentNo, token);
      const existingScores = responseJsonObject.data;
      const scoresMap = {};

      // (2) 이미 있는 점수 filtering
      //     현재 선택된 scoreTypeNo와 같은 점수만 추출
      const filteredScores = existingScores.filter(
        (score) => score.scoreTypeNo === scoreTypeNo
      );

      if (filteredScores.length > 0) {
        setIsUpdate(true); // 이미 등록된 성적이 있다면 수정 모드로
      } else {
        setIsUpdate(false); // 등록된 성적이 없다면 신규등록 모드
      }

      // (3) 각 과목별 점수를 scoresMap에 담아둠
      filteredScores.forEach((score) => {
        scoresMap[score.subjectNo] = score.scoreValue;
      });

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
  const handleStudentChange = (e) => {
    const selectedStudentNo = e.target.value;
    const selectedStudent = students.find(
      (s) => s.studentNo.toString() === selectedStudentNo
    );

    if (selectedStudent) {
      setScores((prev) => ({
        ...prev,
        studentNo: selectedStudent.studentNo,
        studentSchool: selectedStudent.studentSchool,
        studentGrade: selectedStudent.studentGrade,
        scoreTypeNo: "",
        scores: {},
      }));
      // 학생 다시 바꿀 때는 기존 isUpdate 상태도 false로 재설정
      setIsUpdate(false);
    }
  };

  const handleScoreTypeChange = (e) => {
    const selectedScoreTypeNo = parseInt(e.target.value, 10);

    setScores((prev) => ({
      ...prev,
      scoreTypeNo: selectedScoreTypeNo,
    }));

    // (4) 학생이 선택된 상황에서만 API호출
    if (scores.studentNo) {
      getScoreListByStudentNo(scores.studentNo, selectedScoreTypeNo);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setScores((prev) => ({
      ...prev,
      scores: { ...prev.scores, [name]: parseInt(value) || 0 },
    }));
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
      if (isUpdate) {
        // (5) 수정 모드일 경우: update API 호출
        await scoreApi.updateScores(scoreData, token);
        alert("성적 수정 완료!");
      } else {
        // (6) 신규등록 모드일 경우: save API 호출
        await scoreApi.saveScores(scoreData, token);
        alert("성적 등록 완료!");
      }
    } catch (error) {
      console.error("성적 저장 실패:", error);
      alert("성적 저장 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="score-registration-content">
      <h2>점수 등록 / 수정</h2>
      <form className="score-registration-form" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>이름</label>
              </td>
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
              <td>
                <label>학년</label>
              </td>
              <td>
                <input
                  type="text"
                  name="studentGrade"
                  value={scores.studentGrade}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>학교</label>
              </td>
              <td>
                <input
                  type="text"
                  name="studentSchool"
                  value={scores.studentSchool}
                  readOnly
                />
              </td>
              <td>
                <label>시험 유형</label>
              </td>
              <td>
                <select
                  name="scoreTypeNo"
                  value={scores.scoreTypeNo || ""}
                  onChange={handleScoreTypeChange}
                >
                  <option value="">시험 유형 선택</option>
                  {scoreTypes.map((scoreType) => (
                    <option
                      key={scoreType.scoreTypeNo}
                      value={scoreType.scoreTypeNo}
                    >
                      {scoreType.scoreTypeName}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <table>
          <tbody>
            {subjects.length > 0 ? (
              subjects.map((subject, index) =>
                index % 2 === 0 ? (
                  <tr key={subject.subjectNo}>
                    <td>
                      <label>{subject.subjectName}</label>
                    </td>
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
                        <td>
                          <label>{subjects[index + 1].subjectName}</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            name={subjects[index + 1].subjectNo}
                            value={
                              scores.scores[subjects[index + 1].subjectNo] || ""
                            }
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

        <button type="submit" className="save-button">
          {isUpdate ? "수정" : "저장"}
        </button>
      </form>
    </div>
  );
};

export default ScoreRegistrationPage;
