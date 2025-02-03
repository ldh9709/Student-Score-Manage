import React, { useEffect, useState } from "react";
import "../../css/RegistrationPage.css";
import * as subjectApi from "../../api/subjectApi";


const SubjectsRegistrationPage = ({ setActiveTab }) => {

  const [subjectList, setSubjectList] = useState([]);

  const getSubjectList = async () => {
    try {
      const responseJsonObject = await subjectApi.getSubjectList();
      setSubjectList(responseJsonObject.data);
      console.log("subject responseJsonObject : ", responseJsonObject);
    } catch (error) {
      console.error("과목 리스트 불러오기 실패 : ", error);
    }
  }

  useEffect(() => {
    getSubjectList();
  }, []);
  
  const handleSubjectClick = () => {
    setActiveTab("subjects-registration"); // 클릭 시 탭 상태를 변경
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
                <tr
                key={subject.subjectNo}
                onClick={handleSubjectClick}
                className="clickable-row"
                >
                <td>{subject.subjectNo}</td>
                <td>{subject.subjectName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <input type="button" value={"과목 추가"} className="add-button" />
    </div>
  );
};

export default SubjectsRegistrationPage;
