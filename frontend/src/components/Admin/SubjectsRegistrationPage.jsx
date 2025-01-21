import React from "react";
import "../../css/RegistrationPage.css";

const subjects = [
  { id: 1, name: "국어", number: "1" },
  { id: 2, name: "수학", number: "2" },
  { id: 3, name: "사회", number: "3" },
  { id: 4, name: "과학", number: "4" },
];

const SubjectsRegistrationPage = ({ setActiveTab }) => {
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
            {subjects.map((subject) => (
                <tr
                key={subject.id}
                onClick={handleSubjectClick}
                className="clickable-row"
                >
                <td>{subject.number}</td>
                <td>{subject.name}</td>
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
