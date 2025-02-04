import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as schoolApi from "../../api/schoolApi";

const SchoolsRegistrationPage = ({ setActiveTab }) => {
  const [schoolList, setSchoolList] = useState([]);
  const [newSchool, setNewSchool] = useState(""); // 추가할 학교명
  const [isAdding, setIsAdding] = useState(false); // 새 입력 칸 표시 여부

  /********************* API 호출 함수 ****************************/
  const getSchoolList = async () => {
    try {
      const responseJsonObject = await schoolApi.getSchoolList();
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
  const handleSchoolClick = () => {
    setActiveTab("schools-registration"); // 클릭 시 탭 상태를 변경
  };

  const handleAddRow = () => {
    setIsAdding(true); // 새 입력 칸 표시
  };

  const handleSaveSchool = async () => {
    if (!newSchool.trim()) {
      alert("학교명을 입력해주세요.");
      return;
    }

    try {
      await schoolApi.saveSchool({ schoolName: newSchool });
      setNewSchool(""); // 입력 필드 초기화
      setIsAdding(false); // 입력 칸 숨기기
      getSchoolList(); // 목록 다시 불러오기
    } catch (error) {
      console.error("학교 추가 실패:", error);
    }
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
              <tr key={school.schoolNo} onClick={handleSchoolClick} className="clickable-row">
                <td>{school.schoolNo}</td>
                <td>{school.schoolName}</td>
              </tr>
            ))}

            {/* 새로운 입력 칸 추가 (isAdding이 true일 때만 보임) */}
            {isAdding && (
              <tr>
                <td>새 학교</td>
                <td>
                  <input
                    type="text"
                    value={newSchool}
                    onChange={(e) => setNewSchool(e.target.value)}
                    placeholder="학교명을 입력하세요"
                    className="add-input"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 학교 추가 & 저장 버튼 */}
      <div className="button-container">
        <button className="add-button" onClick={handleAddRow}>
          학교 추가
        </button>
        &ensp;
        <button className="save-button" onClick={handleSaveSchool} disabled={!isAdding}>
          저장
        </button>
      </div>
    </div>
  );
};

export default SchoolsRegistrationPage;
