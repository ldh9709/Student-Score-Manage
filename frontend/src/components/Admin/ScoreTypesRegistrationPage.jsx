import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as scoreTypeApi from "../../api/scoreTypeApi";

const ScoreTypesRegistrationPage = ({ setActiveTab }) => {

  /********************* 상태 관리 ****************************/
  const [scoreTypeList, setScoreTypeList] = useState([]);
  const [newScoreType, setNewScoreType] = useState(""); // 추가할 시험 유형
  const [isAdding, setIsAdding] = useState(false); // 새 입력 칸 표시 여부
  const [deleteTarget, setDeleteTarget] = useState(null); // 삭제할 시험 유형 ID 저장
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 표시 여부

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
  
  //deleteTarget에 해당 scoreTypeNo를 저장하고 모달을 표시
  const handleOpenDeleteModal = (scoreTypeNo) => {
    setDeleteTarget(scoreTypeNo);  // 삭제할 시험 유형 ID 저장
    setIsModalOpen(true);  // 모달 열기
  };

  //deleteTarget을 사용해 삭제 진행 후, setDeleteTarget(null)로 초기화
  const handleDeleteScoreType = async () => {
    try {
      await scoreTypeApi.deleteScoreType(deleteTarget);
      getScoreTypeList(); // 목록 새로고침
    } catch (error) {
      console.error("시험 유형 삭제 실패:", error);
    }
    setIsModalOpen(false); // 모달 닫기
    setDeleteTarget(null); // 삭제 대상 초기화
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
              <tr key={scoreType.scoreTypeNo} onClick={() => handleOpenDeleteModal(scoreType.scoreTypeNo)} className="clickable-row">
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

      {/* 삭제 확인 모달 */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>이 시험 유형을 삭제하시겠습니까?</p>
            <button className="confirm-button" onClick={handleDeleteScoreType}>삭제</button>
            <button className="cancel-button" onClick={() => setIsModalOpen(false)}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreTypesRegistrationPage;
