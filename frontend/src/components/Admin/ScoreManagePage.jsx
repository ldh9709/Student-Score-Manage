import React from "react";
import "../../css/ScoreManagePage.css";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import "../../css/ScoreManagePage.css";

// Chart.js에 필요한 컴포넌트를 등록
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const student = {
  id: 1,
  grade: "1학년",
  name: "김철수",
  school: "서울초등학교",
  address: "서울특별시 강남구 테헤란로 123",
  dob: "2012-05-15",
  parentPhone: "010-1234-5678",
  phone: "010-1234-5678",
  kor: 90,
  math: 80,
  society: 90,
  science: 70,
  eng: 80,
};

const ScoreManagePage = () => {
  const avg = (
    (student.kor + student.math + student.society + student.science + student.eng) /
    5
  ).toFixed(2);

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
    labels: ["국어", "수학", "사회", "과학", "영어"],
    datasets: [
      {
        label: "중간고사",
        data: [88, 98, 80, 90, 88],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "기말고사",
        data: [80, 99, 90, 99, 95],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
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
            <td className="value-cell">{student.name}</td>
            <td className="label-cell">학년</td>
            <td className="value-cell">{student.grade}</td>
          </tr>
          <tr>
            <td className="label-cell">학교</td>
            <td className="value-cell">{student.school}</td>
            <td className="label-cell">주소</td>
            <td className="value-cell">{student.address}</td>
          </tr>
          <tr>
            <td className="label-cell">생년월일</td>
            <td className="value-cell">{student.dob}</td>
            <td className="label-cell">등록일</td>
            <td className="value-cell">{student.dob}</td>
          </tr>
          <tr>
            <td className="label-cell">부모 연락처</td>
            <td className="value-cell">{student.parentPhone}</td>
            <td className="label-cell">학생 연락처</td>
            <td className="value-cell">{student.phone}</td>
          </tr>
          </tbody>
      </table>
      
      <br/>

      <table className="table-container">
        <tbody>
          <tr>
            <th></th>
            <th>국어</th>
            <th>수학</th>
            <th>사회</th>
            <th>과학</th>
            <th>영어</th>
            <th>총점</th>
            <th>평균</th>
          </tr>  
          <tr>
            <th>중간고사 점수</th>
            <td>{student.kor}/77</td>
            <td>{student.math}/77</td>
            <td>{student.society}/80</td>
            <td>{student.science}/90</td>
            <td>{student.eng}/88</td>
            <td>{99}/300</td>
            <td>{avg}/80</td>
          </tr>  

          <tr>
            <th>중간고사 등급</th>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td></td>
            <td></td>
          </tr>  

          <tr>
            <th>기말고사 점수</th>
            <td>{student.kor}/70</td>
            <td>{student.math}/77</td>
            <td>{student.society}/66</td>
            <td>{student.science}/99</td>
            <td>{student.eng}/95</td>
            <td>{99}/305</td>
            <td>{avg}/88</td>
          </tr>  

          <tr>
            <th>기말고사 등급</th>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td></td>
            <td></td>
          </tr>  
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
