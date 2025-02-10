import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as subjectApi from "../../api/subjectApi";
import { useMemberAuth } from "../../util/AuthContext"; //  인증 정보 가져오기

const SubjectsRegistrationPage = ({ setActiveTab }) => {
  /*인증 관리 */
  const auth = useMemberAuth();
  const token = auth?.token || null;

  /********************* 상태 관리 ****************************/
  const [subjectList, setSubjectList] = useState([]);
  const [newSubject, setNewSubject] = useState(""); 
  const [isAdding, setIsAdding] = useState(false); 
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /********************* API 호출 함수 ****************************/
  const getSubjectList = async () => {
    try {
      const responseJsonObject = await subjectApi.getSubjectList(token); 
      setSubjectList(responseJsonObject.data);
    } catch (error) {
      console.error("과목 리스트 불러오기 실패:", error);
    }
  };

  /********************* useEffect ****************************/
  useEffect(() => {
    getSubjectList();
  }, []);

  /********************* handle 함수 ****************************/
  const handleAddRow = () => {
    setIsAdding(true);
  };

  const handleSaveSubject = async () => {
    if (!newSubject.trim()) {
      alert("과목명을 입력해주세요.");
      return;
    }

    try {
      await subjectApi.saveSubject({ subjectName: newSubject }, token); 
      setNewSubject("");
      setIsAdding(false);
      getSubjectList();
    } catch (error) {
      console.error("과목 추가 실패:", error);
    }
  };

  const handleOpenDeleteModal = (subjectNo) => {
    setDeleteTarget(subjectNo);
    setIsModalOpen(true);
  };

  const handleDeleteSubject = async () => {
    try {
      await subjectApi.deleteSubject(deleteTarget, token);
      getSubjectList();
    } catch (error) {
      console.error("과목 삭제 실패:", error);
    }
    setIsModalOpen(false);
    setDeleteTarget(null);
  };

  return (
    <div className="subjects-registration-content">
      <h2>과목 관리</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
            </tr>
          </thead>
          <tbody>
            {subjectList.map((subject) => (
              <tr key={subject.subjectNo} onClick={() => handleOpenDeleteModal(subject.subjectNo)} className="clickable-row">
                <td>{subject.subjectNo}</td>
                <td>{subject.subjectName}</td>
              </tr>
            ))}

            {isAdding && (
              <tr>
                <td>새 과목</td>
                <td>
                  <input type="text" value={newSubject} onChange={(e) => setNewSubject(e.target.value)} placeholder="과목명을 입력하세요" className="add-input" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="button-container">
        <button className="add-button" onClick={handleAddRow}>과목 추가</button>
        <button className="save-button" onClick={handleSaveSubject} disabled={!isAdding}>저장</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>이 과목을 삭제하시겠습니까?</p>
            <button className="confirm-button" onClick={handleDeleteSubject}>삭제</button>
            <button className="cancel-button" onClick={() => setIsModalOpen(false)}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectsRegistrationPage;
