import React, { useEffect, useState } from "react";
import "../../css/ScoreManagePage.css";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { useNavigate, useParams } from "react-router-dom";

import * as scoreApi from "../../api/scoreApi";
import * as subjectApi from "../../api/subjectApi";
import * as studentApi from "../../api/studentApi";
import * as scoreTypeApi from "../../api/scoreTypeApi";
import { useMemberAuth } from "../../util/AuthContext"; // ✅ 인증 정보 가져오기

// Chart.js에 필요한 컴포넌트 등록
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ScoreManagePage = ({ setActiveTab, selectedStudentNo, setSelectedStudentNo }) => {
  /* ✅ 인증 관리 */
  const auth = useMemberAuth();
  const token = auth?.token || null;

  /********************* 상태 관리 ****************************/
  const { studentNo } = useParams();
  const studentId = selectedStudentNo || studentNo;
  const [student, setStudent] = useState(null);
  const [scores, setScores] = useState([]);
  const [subjects, setSubjects] = useState({});
  const [scoreTypes, setScoreTypes] = useState([]);

  // 전체 평균 점수 계산
  const avg =
    scores.length > 0
      ? (scores.reduce((acc, score) => acc + score.scoreValue, 0) / scores.length).toFixed(2)
      : "N/A";

  // 화면 이동
  const navigate = useNavigate();

  /********************* API 호출 함수 ****************************/
  const getStudentByStudentNo = async () => {
    try {
      const studentData = await studentApi.getStudentByStudentNo(studentId, token); // ✅ 토큰 추가
      setStudent(studentData.data);
    } catch (error) {
      console.error("학생 정보 불러오기 오류:", error);
    }
  };

  const getScoreListByStudentNo = async () => {
    try {
      const studentScores = await scoreApi.getScoreListByStudentNo(studentId, token); // ✅ 토큰 추가
      setScores(studentScores.data);
    } catch (error) {
      console.error("학생 성적 불러오기 오류:", error);
    }
  };

  const getScoreTypes = async () => {
    try {
      const scoreTypes = await scoreTypeApi.getScoreTypeList(token); // ✅ 토큰 추가
      setScoreTypes(scoreTypes.data);
    } catch (error) {
      console.error("시험 유형 불러오기 오류:", error);
    }
  };

  const getSubjectList = async () => {
    try {
      const responseJsonObject = await subjectApi.getSubjectList(token); // ✅ 토큰 추가
      const subjectMap = {};
      responseJsonObject.data.forEach((subject) => {
        subjectMap[subject.subjectNo] = subject.subjectName;
      });
      setSubjects(subjectMap);
    } catch (error) {
      console.error("과목 리스트 불러오기 오류:", error);
    }
  };

  /********************* useEffect ****************************/
  useEffect(() => {
    if (!selectedStudentNo) return;
    getStudentByStudentNo();
    getScoreListByStudentNo();
  }, [studentId]);

  useEffect(() => {
    getSubjectList();
    getScoreTypes();
  }, []);

  return (
    <div className="score-manage-container">
      <h2>학생 성적 관리</h2>
      <table className="table-container">
        <tbody>
          <tr>
            <td className="label-cell">이름</td>
            <td className="value-cell">{student?.studentName || "로딩 중..."}</td>
            <td className="label-cell">학년</td>
            <td className="value-cell">{student?.studentGrade || "로딩 중..."}</td>
          </tr>
        </tbody>
      </table>

      <br />

      <table className="table-container">
        <thead>
          <tr>
            <th>과목</th>
            {scoreTypes.map((scoreType) => (
              <th key={scoreType.scoreTypeNo}>{scoreType.scoreTypeName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subjects &&
            Object.keys(subjects).map((subjectNo) => (
              <tr key={subjectNo}>
                <td>{subjects[subjectNo]}</td>
                {scoreTypes.map((scoreType) => {
                  const score = scores.find(
                    (score) => score.subjectNo == subjectNo && score.scoreTypeNo === scoreType.scoreTypeNo
                  );
                  return <td key={scoreType.scoreTypeNo}>{score ? score.scoreValue : "점수가 없습니다."}</td>;
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreManagePage;
