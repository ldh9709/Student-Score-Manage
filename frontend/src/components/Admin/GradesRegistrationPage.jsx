import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as gradeApi from "../../api/gradeApi";

const GradesRegistrationPage = ({ setActiveTab }) => {
  const [gradeList, setGradeList] = useState([]);
  const [newGrade, setNewGrade] = useState(""); 
  const [isAdding, setIsAdding] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /********************* API 호출 함수 ****************************/
  const getGradeList = async () => {
    try {
      const responseJsonObject = await gradeApi.getGradeList();
      setGradeList(responseJsonObject.data);
    } catch (error) {
      console.error("학년 리스트 불러오기 실패:", error);
    }
  };

  useEffect(() => {
    getGradeList();
  }, []);

  const handleAddRow = () => {
    setIsAdding(true);
  };

  const handleSaveGrade = async () => {
    if (!newGrade.trim()) {
      alert("학년명을 입력해주세요.");
      return;
    }

    try {
      await gradeApi.saveGrade({ gradeName: newGrade });
      setNewGrade("");
      setIsAdding(false);
      getGradeList();
    } catch (error) {
      console.error("학년 추가 실패:", error);
    }
  };

  const handleOpenDeleteModal = (gradeNo) => {
    setDeleteTarget(gradeNo);
    setIsModalOpen(true);
  };

  const handleDeleteGrade = async () => {
    try {
      await gradeApi.deleteGrade(deleteTarget);
      getGradeList();
    } catch (error) {
      console.error("학년 삭제 실패:", error);
    }
    setIsModalOpen(false);
    setDeleteTarget(null);
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
              <tr key={grade.gradeNo} onClick={() => handleOpenDeleteModal(grade.gradeNo)} className="clickable-row">
                <td>{grade.gradeNo}</td>
                <td>{grade.gradeName}</td>
              </tr>
            ))}

            {isAdding && (
              <tr>
                <td>새 학년</td>
                <td>
                  <input type="text" value={newGrade} onChange={(e) => setNewGrade(e.target.value)} placeholder="학년명을 입력하세요" className="add-input" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="button-container">
        <button className="add-button" onClick={handleAddRow}>학년 추가</button>
        <button className="save-button" onClick={handleSaveGrade} disabled={!isAdding}>저장</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>이 학년을 삭제하시겠습니까?</p>
            <button className="confirm-button" onClick={handleDeleteGrade}>삭제</button>
            <button className="cancel-button" onClick={() => setIsModalOpen(false)}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradesRegistrationPage;
