import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as scoreTypeApi from "../../api/scoreTypeApi";
import { useMemberAuth } from "../../util/AuthContext"; //  인증 정보 가져오기

const ScoreTypesRegistrationPage = ({ setActiveTab }) => {
  /*  인증 관리 */
  const auth = useMemberAuth();
  const token = auth?.token || null;

  /********************* 상태 관리 ****************************/
  const [scoreTypeList, setScoreTypeList] = useState([]);
  const [newScoreType, setNewScoreType] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /********************* API 호출 함수 ****************************/
  const getScoreTypeList = async () => {
    try {
      const responseJsonObject = await scoreTypeApi.getScoreTypeList(token); 
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
    setIsAdding(true);
  };

  const handleSaveScoreType = async () => {
    if (!newScoreType.trim()) {
      alert("시험 유형명을 입력해주세요.");
      return;
    }

    try {
      await scoreTypeApi.saveScoreType({ scoreTypeName: newScoreType }, token); 
      setNewScoreType("");
      setIsAdding(false);
      getScoreTypeList();
    } catch (error) {
      console.error("시험 유형 추가 실패:", error);
    }
  };
  
  const handleOpenDeleteModal = (scoreTypeNo) => {
    setDeleteTarget(scoreTypeNo);
    setIsModalOpen(true);
  };

  const handleDeleteScoreType = async () => {
    try {
      await scoreTypeApi.deleteScoreType(deleteTarget, token); 
      getScoreTypeList();
    } catch (error) {
      console.error("시험 유형 삭제 실패:", error);
    }
    setIsModalOpen(false);
    setDeleteTarget(null);
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

      <div className="button-container">
        <button className="add-button" onClick={handleAddRow}>
          시험 유형 추가
        </button>
        &ensp;
        <button className="save-button" onClick={handleSaveScoreType} disabled={!isAdding}>
          저장
        </button>
      </div>

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
