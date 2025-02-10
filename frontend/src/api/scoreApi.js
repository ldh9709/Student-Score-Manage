import axios from "axios";

const BACKEND_SERVER = "http://localhost:8080";

// 성적 리스트 조회
export const getScoreList = async (token) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/score`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching score list:", error);
        throw error;
    }
};

// 특정 성적 조회
export const getScoreByScoreNo = async (scoreNo, token) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/score/${scoreNo}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching score with ID ${scoreNo}:`, error);
        throw error;
    }
};

// 특정 학생의 성적 조회
export const getScoreListByStudentNo = async (studentNo, token) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/score/student/${studentNo}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log("getScoreListByStudentNo : ", response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching scoreList with StudentID ${studentNo}:`, error);
        throw error;
    }
};

// 성적 추가
export const saveScore = async (scoreData, token) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/score`, scoreData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating score:", error);
        throw error;
    }
};

// 성적 리스트 추가
export const saveScores = async (scoreData, token) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/score/scores`, scoreData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating scores:", error);
        throw error;
    }
};

// 성적 수정
export const updateScore = async (scoreNo, scoreData, token) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/score/${scoreNo}`, scoreData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating score with ID ${scoreNo}:`, error);
        throw error;
    }
};

// 성적 리스트 수정
export const updateScores = async (scoreData, token) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/score/scores`, scoreData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating scores :`, error);
        throw error;
    }
};

// 성적 삭제
export const deleteScore = async (scoreNo, token) => {
    try {
        await axios.delete(`${BACKEND_SERVER}/score/${scoreNo}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(`Error deleting score with ID ${scoreNo}:`, error);
        throw error;
    }
};
