import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as schoolApi from "../../api/schoolApi";
import { useMemberAuth } from "../../util/AuthContext"; // ✅ 인증 정보 가져오기

const SchoolsRegistrationPage = ({ setActiveTab }) => {
  /* ✅ 인증 관리 */
  const auth = useMemberAuth();
  const token = auth?.token || null;

  /********************* 상태 관리 ****************************/
  const [schoolList, setSchoolList] = useState([]);
  const [newSchool, setNewSchool] = useState(""); 
  const [isAdding, setIsAdding] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /********************* API 호출 함수 ****************************/
  const getSchoolList = async () => {
    try {
      const responseJsonObject = await schoolApi.getSchoolList(token); // ✅ 토큰 추가
      setSchoolList(responseJsonObject.data);
    } catch (error) {
      console.error("학교 리스트 불러오기 실패:", error);
    }
  };

  /********************* useEffect ****************************/
  useEffect(() => {
    getSchoolList();
  }, []);

  /********************* handle 함수 ****************************/
  const handleAddRow = () => {
    setIsAdding(true);
  };

  const handleSaveSchool = async () => {
    if (!newSchool.trim()) {
      alert("학교명을 입력해주세요.");
      return;
    }

    try {
      await schoolApi.saveSchool({ schoolName: newSchool }, token); // ✅ 토큰 추가
      setNewSchool("");
      setIsAdding(false);
      getSchoolList();
    } catch (error) {
      console.error("학교 추가 실패:", error);
    }
  };

  const handleOpenDeleteModal = (schoolNo) => {
    setDeleteTarget(schoolNo);
    setIsModalOpen(true);
  };

  const handleDeleteSchool = async () => {
    try {
      await schoolApi.deleteSchool(deleteTarget, token); // ✅ 토큰 추가
      getSchoolList();
    } catch (error) {
      console.error("학교 삭제 실패:", error);
    }
    setIsModalOpen(false);
    setDeleteTarget(null);
  };

  return (
    <div className="schools-registration-content">
      <h2>학교 관리</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
            </tr>
          </thead>
          <tbody>
            {schoolList.map((school) => (
              <tr key={school.schoolNo} onClick={() => handleOpenDeleteModal(school.schoolNo)} className="clickable-row">
                <td>{school.schoolNo}</td>
                <td>{school.schoolName}</td>
              </tr>
            ))}

            {isAdding && (
              <tr>
                <td>새 학교</td>
                <td>
                  <input type="text" value={newSchool} onChange={(e) => setNewSchool(e.target.value)} placeholder="학교명을 입력하세요" className="add-input" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="button-container">
        <button className="add-button" onClick={handleAddRow}>학교 추가</button>
        <button className="save-button" onClick={handleSaveSchool} disabled={!isAdding}>저장</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>이 학교를 삭제하시겠습니까?</p>
            <button className="confirm-button" onClick={handleDeleteSchool}>삭제</button>
            <button className="cancel-button" onClick={() => setIsModalOpen(false)}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolsRegistrationPage;
