import React from "react";
import "../../css/RegistrationPage.css";

const StudentRegistrationPage = () => {
  return (
    <div className="student-registration-content">
      <h2>학생 등록</h2>
      <form className="student-registration-form">
        <table>
          <tbody>

            <tr>
              <td><label>이름</label></td>
              <td><input type="text" name="studentName" /></td>
              <td><label>성별</label></td>
              <td>
                <input type="radio" name="gender" value="male" /> 남
                <input type="radio" name="gender" value="female" /> 여
              </td>
            </tr>

            <tr>
              <td><label>학교</label></td>
              <td><input type="text" name="birthDate" /></td>
              
              <td><label>생년월일</label></td>
              <td><input type="date" name="birthDate" /></td>
            </tr>
            
            <tr>
              <td><label>학년</label></td>
              <td>
                <select name="grade">
                  <option value="1">초등 1학년</option>
                  <option value="2">초등 2학년</option>
                  <option value="3">초등 3학년</option>
                </select>
              </td>
              <td><label>등록일</label></td>
              <td><input type="text" name="birthDate" /></td>
            </tr>     

            <tr>
              <td><label>부모님 전화번호</label></td>
              <td><input type="text" name="birthDate" /></td>
              <td><label>학생 전화번호</label></td>
              <td><input type="text" name="birthDate" /></td>
            </tr>     

          </tbody>
        </table>
        <button type="submit" className="save-button">저장</button>
      </form>
    </div>
  );
};

export default StudentRegistrationPage;
