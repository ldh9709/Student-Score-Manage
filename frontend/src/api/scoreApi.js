import axios from "axios";

const BACKEND_SERVER = "http://localhost:8080";

// 성적 리스트 조회
export const getScoreList = async () => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/score`);
        return response.data;
    } catch (error) {
        console.error("Error fetching score list:", error);
        throw error;
    }
};

// 특정 성적 조회
export const getScoreByScoreNo = async (scoreNo) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/score/${scoreNo}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching score with ID ${scoreNo}:`, error);
        throw error;
    }
};

// 특정 성적 조회
export const getScoreListByStudentNo = async (studentNo) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/score/student/${studentNo}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching scoreList with StudentID ${studentNo}:`, error);
        throw error;
    }
};

// 성적 추가
export const saveScore = async (scoreData) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/score`, scoreData);
        return response.data;
    } catch (error) {
        console.error("Error creating score:", error);
        throw error;
    }
};

// 성적 리스트 추가
export const saveScores = async (scoreData) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/score/scores`, scoreData);
        return response.data;
    } catch (error) {
        console.error("Error creating score:", error);
        throw error;
    }
};

// 성적 수정
export const updateScore = async (scoreNo, scoreData) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/score/${scoreNo}`, scoreData);
        return response.data;
    } catch (error) {
        console.error(`Error updating score with ID ${scoreNo}:`, error);
        throw error;
    }
};

// 성적 삭제
export const deleteScore = async (scoreNo) => {
    try {
        await axios.delete(`${BACKEND_SERVER}/score/${scoreNo}`);
    } catch (error) {
        console.error(`Error deleting score with ID ${scoreNo}:`, error);
        throw error;
    }
};
