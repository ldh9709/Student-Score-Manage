import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as subjectApi from "../../api/subjectApi";

const SubjectsRegistrationPage = ({ setActiveTab }) => {
  const [subjectList, setSubjectList] = useState([]);
  const [newSubject, setNewSubject] = useState(""); // 추가할 과목명
  const [isAdding, setIsAdding] = useState(false); // 새 입력 칸 표시 여부

  /********************* API 호출 함수 ****************************/
  const getSubjectList = async () => {
    try {
      const responseJsonObject = await subjectApi.getSubjectList();
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
  const handleSubjectClick = () => {
    setActiveTab("subjects-registration"); // 클릭 시 탭 상태를 변경
  };

  const handleAddRow = () => {
    setIsAdding(true); // 새 입력 칸 표시
  };

  const handleSaveSubject = async () => {
    if (!newSubject.trim()) {
      alert("과목명을 입력해주세요.");
      return;
    }

    try {
      await subjectApi.saveSubject({ subjectName: newSubject });
      setNewSubject(""); // 입력 필드 초기화
      setIsAdding(false); // 입력 칸 숨기기
      getSubjectList(); // 목록 다시 불러오기
    } catch (error) {
      console.error("과목 추가 실패:", error);
    }
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
              <tr key={subject.subjectNo} onClick={handleSubjectClick} className="clickable-row">
                <td>{subject.subjectNo}</td>
                <td>{subject.subjectName}</td>
              </tr>
            ))}

            {/* 새로운 입력 칸 추가 (isAdding이 true일 때만 보임) */}
            {isAdding && (
              <tr>
                <td>새 과목</td>
                <td>
                  <input
                    type="text"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    placeholder="과목명을 입력하세요"
                    className="add-input"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 과목 추가 & 저장 버튼 */}
      <div className="button-container">
        <button className="add-button" onClick={handleAddRow}>
          과목 추가
        </button>
        &ensp;
        <button className="save-button" onClick={handleSaveSubject} disabled={!isAdding}>
          저장
        </button>
      </div>
    </div>
  );
};

export default SubjectsRegistrationPage;
