import React, { useEffect, useState } from "react";
import "../../css/ScoreManagePage.css";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS,   RadialLinearScale,    PointElement,  LineElement,    Filler,    Tooltip,    Legend,} from "chart.js";
import { useNavigate, useParams } from "react-router-dom";
import { useMemberAuth } from "../../util/AuthContext";

import * as scoreApi from "../../api/scoreApi";
import * as subjectApi from "../../api/subjectApi";
import * as studentApi from "../../api/studentApi";
import * as scoreTypeApi from "../../api/scoreTypeApi";

// Chart.js에 필요한 컴포넌트를 등록
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ScoreManagePage = ({ setActiveTab, selectedStudentNo, setSelectedStudentNo }) => {

  /********************* 상태 관리 ****************************/
  //인증 정보 가져오기
  const auth = useMemberAuth();
  const token = auth?.token || null;

  // URL에서 특정 학생 번호 가져오기
  const { studentNo } = useParams();

  // 선택한 학생 번호 가져오기 (selectedStudentNo가 있으면 우선 사용)
  const studentId = selectedStudentNo || studentNo;

  // 학생 정보 상태 관리
  const [student, setStudent] = useState(null);

  // 학생 성적 상태 관리
  const [scores, setScores] = useState([]);

  // 과목 정보 상태 관리
  const [subjects, setSubjects] = useState({});

  // 시험 유형 정보 상태 관리
  const [scoreTypes, setScoreTypes] = useState([]);

  // 시험 유형별 데이터 필터링
  const midtermScores = scores.filter((score) => score.scoreTypeNo === 1); // 중간고사
  const finalScores = scores.filter((score) => score.scoreTypeNo === 2); // 기말고사

  // 전체 평균 점수 계산
  const avg =
    scores.length > 0
      ? (scores.reduce((acc, score) => acc + score.scoreValue, 0) / scores.length).toFixed(2)
      : "N/A"; // 성적 데이터 없을 때 대비

  //화면 이동
  const navigate = useNavigate();
  
  /********************* 레이더 차트 설정 ****************************/
  // 차트 옵션 설정
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

// 차트 데이터 설정
const radarData = {
  labels: Object.values(subjects), // 과목명 리스트
  datasets: scoreTypes.map((scoreType) => ({
    label: scoreType.scoreTypeName, // 시험 유형 이름 (ex: 중간고사, 기말고사 등)
    data: Object.keys(subjects).map(
      (subjectNo) =>
        scores.find(
          (score) =>
            score.subjectNo == subjectNo &&
            score.scoreTypeNo === scoreType.scoreTypeNo
        )?.scoreValue || 0
    ),
    backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 0.2)`, // 랜덤 색상
    borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`,
    borderWidth: 1,
  })),
};
  
  /********************* API 호출 함수 ****************************/
  // 학생 정보 가져오기
  const getStudentByStudentNo = async () => {
    try {
      const studentData = await studentApi.getStudentByStudentNo(studentId, token);
      setStudent(studentData.data);
    } catch (error) {
      console.error("학생 정보 불러오기 오류:", error);
    }
  };

  // 학생의 성적 가져오기
  const getScoreListByStudentNo = async () => {
    try {
      const studentScores = await scoreApi.getScoreListByStudentNo(studentId, token);
      setScores(studentScores.data);
      console.log("studentScores : ", studentScores);
    } catch (error) {
      console.error("학생 성적 불러오기 오류 : ", error);
    }
  };

  //시험 유형 가져오기
  const getScoreTypes = async () => {
    try {
      const scoreTypes = await scoreTypeApi.getScoreTypeList(token);
      setScoreTypes(scoreTypes.data);
    } catch (error) {
      console.error("시험 유형 불러오기 오류 : ", error);
    }
  }

  // 과목 리스트 가져오기
  const getSubjectList = async () => {
    try {
      const responseJsonObject = await subjectApi.getSubjectList(token);
      const subjectMap = {};
      responseJsonObject.data.forEach((subject) => {
        subjectMap[subject.subjectNo] = subject.subjectName;
      });
      setSubjects(subjectMap);
    } catch (error) {
      console.error("error getSubjectList : ", error);
    }
  };

  /********************* useEffect ****************************/
  // studentId가 변경될 때마다 실행
  useEffect(() => {
    if (!selectedStudentNo) return; // 학생이 선택되지 않았다면 실행 X
    
    getStudentByStudentNo();
    getScoreListByStudentNo();
  }, [studentId]);
  
  // 페이지 로딩 시 최초 실행
  useEffect(() => {
    getSubjectList();
    getScoreTypes();
  }, []);
  
  /********************* handle 함수 ****************************/
  
  const handleStudentClick = (studentNo) => {
    setSelectedStudentNo(studentNo); 
    setActiveTab("student-edit");
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
            {scoreTypes.map((scoreType) => (
              <th key={scoreType.scoreTypeNo}>{scoreType.scoreTypeName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subjects && Object.keys(subjects).map((subjectNo) => (
            <tr key={subjectNo}>
              <td>{subjects[subjectNo]}</td>
              {scoreTypes.map((scoreType) => {
                const score = scores.find(score => score.subjectNo == subjectNo && score.scoreTypeNo === scoreType.scoreTypeNo);
                return <td key={scoreType.scoreTypeNo}>{score ? score.scoreValue : "점수가 없습니다."}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* 레이더 차트 추가 */}
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h3>능력치 분석</h3>
        <Radar data={radarData} options={radarOptions} />
      </div>
      <button 
        className="edit-button" 
        onClick={() => student?.studentNo && handleStudentClick(student.studentNo)}  
        disabled={!student}
      >
        학생 정보 수정
      </button>
    </div>
    
  );
};

export default ScoreManagePage;