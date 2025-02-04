import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as scoreTypeApi from "../../api/scoreTypeApi";

const ScoreTypesRegistrationPage = ({ setActiveTab }) => {
  const [scoreTypeList, setScoreTypeList] = useState([]);
  const [newScoreType, setNewScoreType] = useState(""); // 추가할 시험 유형
  const [isAdding, setIsAdding] = useState(false); // 새 입력 칸 표시 여부

  /********************* API 호출 함수 ****************************/
  const getScoreTypeList = async () => {
    try {
      const responseJsonObject = await scoreTypeApi.getScoreTypeList();
      setScoreTypeList(responseJsonObject.data);
    } catch (error) {
      console.error("시험 유형 리스트 불러오기 실패:", error);
    }
  };

  /********************* useEffect ****************************/
  useEffect(() => {
    getScoreTypeList();
  }, []);

  /********************* handle 함수 ****************************/
  const handleScoreTypeClick = () => {
    setActiveTab("scoreTypes-registration"); // 클릭 시 탭 상태를 변경
  };

  const handleAddRow = () => {
    setIsAdding(true); // 새 입력 칸 표시
  };

  const handleSaveScoreType = async () => {
    if (!newScoreType.trim()) {
      alert("시험 유형명을 입력해주세요.");
      return;
    }

    try {
      await scoreTypeApi.saveScoreType({ scoreTypeName: newScoreType });
      setNewScoreType(""); // 입력 필드 초기화
      setIsAdding(false); // 입력 칸 숨기기
      getScoreTypeList(); // 목록 다시 불러오기
    } catch (error) {
      console.error("시험 유형 추가 실패:", error);
    }
  };

  return (
    <div className="scoreTypes-registration-content">
      <h2>시험 유형 관리</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
            </tr>
          </thead>
          <tbody>
            {scoreTypeList.map((scoreType) => (
              <tr key={scoreType.scoreTypeNo} onClick={handleScoreTypeClick} className="clickable-row">
                <td>{scoreType.scoreTypeNo}</td>
                <td>{scoreType.scoreTypeName}</td>
              </tr>
            ))}

            {/* 새로운 입력 칸 추가 (isAdding이 true일 때만 보임) */}
            {isAdding && (
              <tr>
                <td>새 유형</td>
                <td>
                  <input
                    type="text"
                    value={newScoreType}
                    onChange={(e) => setNewScoreType(e.target.value)}
                    placeholder="시험 유형명을 입력하세요"
                    className="add-input"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 시험 유형 추가 & 저장 버튼 */}
      <div className="button-container">
        <button className="add-button" onClick={handleAddRow}>
          시험 유형 추가
        </button>
        &ensp;
        <button className="save-button" onClick={handleSaveScoreType} disabled={!isAdding}>
          저장
        </button>
      </div>
    </div>
  );
};

export default ScoreTypesRegistrationPage;
