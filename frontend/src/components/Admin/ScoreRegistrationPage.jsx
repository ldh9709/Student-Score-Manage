import React from "react";
import "../../css/RegistrationPage.css";

const ScoreRegistrationPage = () => {
  

  return (
    <div className="score-registration-content">
      <h2>점수 등록</h2>
      <form className="score-registration-form">
        <table>
          <tbody>
            <tr>
              <td><label>이름</label></td>
              <td><input type="text" name="studentName" /></td>
              <td><label>학년</label></td>
              <td><input type="text" name="grade" /></td>
            </tr>

            <tr>
              <td><label>학교</label></td>
              <td><input type="text" name="school" /></td>
              <td><label>시험 유형</label></td>
              <td>
                <select name="examType">
                  <option value="midterm">중간고사</option>
                  <option value="final">기말고사</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <br/>
        
        <table>
          <tbody>
            <tr>
              <td><label>국어</label></td>
              <td><input type="text" name="kor" /></td>
              <td><label>수학</label></td>
              <td><input type="text" name="math" /></td>
            </tr>  

            <tr>
              <td><label>사회</label></td>
              <td><input type="text" name="society" /></td>
              <td><label>과학</label></td>
              <td><input type="text" name="science" /></td>
            </tr>

            <tr>
              <td><label>영어</label></td>
              <td><input type="text" name="eng" /></td>
              <td><label>역사</label></td>
              <td><input type="text" name="history" /></td>
            </tr>  
            
            <tr>
              <td><label>도덕</label></td>
              <td><input type="text" name="eng" /></td>
            </tr>
          </tbody>
        </table>

        <button type="submit" className="save-button">저장</button>
      </form>
    </div>
  );
};

export default ScoreRegistrationPage;
