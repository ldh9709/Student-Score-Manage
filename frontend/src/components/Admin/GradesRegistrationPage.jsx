import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as gradeApi from "../../api/gradeApi";

const GradesRegistrationPage = ({ setActiveTab }) => {
  const [gradeList, setGradeList] = useState([]);
  const [newGrade, setNewGrade] = useState(""); // 추가할 학년명
  const [isAdding, setIsAdding] = useState(false); // 새 입력 칸 표시 여부

  /********************* API 호출 함수 ****************************/
  const getGradeList = async () => {
    try {
      const responseJsonObject = await gradeApi.getGradeList();
      setGradeList(responseJsonObject.data);
    } catch (error) {
      console.error("학년 리스트 불러오기 실패:", error);
    }
  };

  /********************* useEffect ****************************/
  useEffect(() => {
    getGradeList();
  }, []);

  /********************* handle 함수 ****************************/
  const handleGradeClick = () => {
    setActiveTab("grades-registration"); // 클릭 시 탭 상태를 변경
  };

  const handleAddRow = () => {
    setIsAdding(true); // 새 입력 칸 표시
  };

  const handleSaveGrade = async () => {
    if (!newGrade.trim()) {
      alert("학년명을 입력해주세요.");
      return;
    }

    try {
      await gradeApi.saveGrade({ gradeName: newGrade });
      setNewGrade(""); // 입력 필드 초기화
      setIsAdding(false); // 입력 칸 숨기기
      getGradeList(); // 목록 다시 불러오기
    } catch (error) {
      console.error("학년 추가 실패:", error);
    }
  };

  return (
    <div className="grades-registration-content">
      <h2>학년 관리</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
            </tr>
          </thead>
          <tbody>
            {gradeList.map((grade) => (
              <tr key={grade.gradeNo} onClick={handleGradeClick} className="clickable-row">
                <td>{grade.gradeNo}</td>
                <td>{grade.gradeName}</td>
              </tr>
            ))}

            {/* 새로운 입력 칸 추가 (isAdding이 true일 때만 보임) */}
            {isAdding && (
              <tr>
                <td>새 학년</td>
                <td>
                  <input
                    type="text"
                    value={newGrade}
                    onChange={(e) => setNewGrade(e.target.value)}
                    placeholder="학년명을 입력하세요"
                    className="add-input"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 학년 추가 & 저장 버튼 */}
      <div className="button-container">
        <button className="add-button" onClick={handleAddRow}>
          학년 추가
        </button>
        &ensp;
        <button className="save-button" onClick={handleSaveGrade} disabled={!isAdding}>
          저장
        </button>
      </div>
    </div>
  );
};

export default GradesRegistrationPage;
