import React, { useEffect, useState } from "react";
import "../../css/ScoreManagePage.css";
import { Radar } from "react-chartjs-2";
import {  Chart as ChartJS,  RadialLinearScale,  PointElement,  LineElement,  Filler,  Tooltip,  Legend,} from "chart.js";
import { useParams } from "react-router-dom";

import * as scoreApi from "../../api/scoreApi";
import * as subjectApi from "../../api/subjectApi";
import * as studentApi from "../../api/studentApi";

// Chart.js에 필요한 컴포넌트를 등록
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ScoreManagePage = ({ selectedStudentNo }) => {
  // URL에서 특정 학생 NO 가져오기
  const { studentNo } = useParams();
  console.log("StudentNo : ", studentNo);

  const studentId = selectedStudentNo || studentNo; // selectedStudentNo가 있으면 그것을 우선 사용
  console.log("StudentId : ", studentId);

  // 학생 정보 가져오기
  const [student, setStudent] = useState(null);
  console.log("Student : ", student);

  // 성적 정보 가져오기
  const [scores, setScores] = useState([]);

  // 과목 정보 가져오기
  const [subjects, setSubjects] = useState({});

  // 성적 유형 정보 가져오기
  const midtermScores = scores.filter((score) => score.scoreTypeNo === 1); // 중간고사
  const finalScores = scores.filter((score) => score.scoreTypeNo === 2); // 기말고사

  useEffect(() => {
    if (!selectedStudentNo) return; // 학생이 선택되지 않았다면 실행 X

    const getStudentByStudentNo = async () => {
      try {
        const studentData = await studentApi.getStudentByStudentNo(studentId);
        setStudent(studentData.data);
      } catch (error) {
        console.error("학생 정보 불러오기 오류:", error);
      }
    };

    const getScoreListByStudentNo = async () => {
      try {
        const studentScores = await scoreApi.getScoreListByStudentNo(studentId);
        setScores(studentScores.data);
        console.log("studentScores : ", studentScores)
      } catch (error) {
        console.error("학생 성적 불러오기 오류 : ", error);
      }
    };

    getStudentByStudentNo();
    getScoreListByStudentNo();
  }, [studentId]);

  useEffect(() => {
    const getSubjectList = async () => {
      try {
        const responseJsonObject = await subjectApi.getSubjectList();
        const subjectMap = {};
        responseJsonObject.data.forEach((subject) => {
          subjectMap[subject.subjectNo] = subject.subjectName;
        });
        setSubjects(subjectMap);
      } catch (error) {
        console.error("error getSubjectList : ", error);
      }
    };

    getSubjectList();
  }, []);

  const avg =
    scores.length > 0
      ? (scores.reduce((acc, score) => acc + score.scoreValue, 0) / scores.length).toFixed(2)
      : "N/A"; // 성적 데이터 없을 때 대비

  // 표 옵션
  const radarOptions = {
    scales: {
      r: {
        angleLines: {
          display: true, // 각 항목 간의 선 표시 여부
        },
        suggestedMin: 60, // 최소값
        suggestedMax: 100, // 최대값
        ticks: {
          stepSize: 10, // 각 단계의 간격 (60, 70, 80, 90, 100)
          showLabelBackdrop: false, // 레이블 배경 제거
        },
        grid: {
          color: "rgba(0, 0, 0, 0.2)", // 기준선 색상
        },
        pointLabels: {
          font: {
            size: 14, // 레이블 폰트 크기
          },
        },
      },
    },
  };

  const radarData = {
    labels: Object.values(subjects), // 과목명 리스트
    datasets: [
      {
        label: "중간고사 성적",
        data: Object.keys(subjects).map(
          (subjectNo) =>
            midtermScores.find((score) => score.subjectNo == subjectNo)?.scoreValue || 0
        ),
        backgroundColor: "rgba(54, 162, 235, 0.2)", // 파란색
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "기말고사 성적",
        data: Object.keys(subjects).map(
          (subjectNo) =>
            finalScores.find((score) => score.subjectNo == subjectNo)?.scoreValue || 0
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)", // 빨간색
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

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
          <tr>
            <td className="label-cell">학교</td>
            <td className="value-cell">{student?.studentSchool || "로딩 중..."}</td>
            <td className="label-cell">주소</td>
            <td className="value-cell">{student?.studentAddress || "로딩 중..."}</td>
          </tr>
          <tr>
            <td className="label-cell">생년월일</td>
            <td className="value-cell">{student?.studentBirthday || "로딩 중..."}</td>
            <td className="label-cell">등록일</td>
            <td className="value-cell">{student?.studentRegistrationDate || "로딩 중..."}</td>
          </tr>
          <tr>
            <td className="label-cell">부모 연락처</td>
            <td className="value-cell">{student?.studentParentPhone || "로딩 중..."}</td>
            <td className="label-cell">학생 연락처</td>
            <td className="value-cell">{student?.studentPhone || "로딩 중..."}</td>
          </tr>
        </tbody>
      </table>

      <br />

      <table className="table-container">
        <thead>
          <tr>
            <th>과목</th>
            <th>중간고사 점수</th>
            <th>기말고사 점수</th>
          </tr>
        </thead>
        <tbody>
          {subjects && Object.keys(subjects).map((subjectNo) => {
            const midterm = scores.find((score) => score.subjectNo == subjectNo && score.scoreTypeNo === 1);
            const final = scores.find((score) => score.subjectNo == subjectNo && score.scoreTypeNo === 2);

            return (
              <tr key={subjectNo}>
                <td>{subjects[subjectNo]}</td>
                <td>{midterm ? midterm.scoreValue : "N/A"}</td>
                <td>{final ? final.scoreValue : "N/A"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* 레이더 차트 추가 */}
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h3>능력치 분석</h3>
        <Radar data={radarData} options={radarOptions} />
      </div>
    </div>
  );
};

export default ScoreManagePage;
