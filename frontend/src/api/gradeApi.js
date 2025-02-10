import axios from "axios";

const BACKEND_SERVER = "http://localhost:8080";

// 학년 리스트 조회 (✅ GET 요청에서 불필요한 인자 제거)
export const getGradeList = async (token) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/grade`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching grade list:", error);
        throw error;
    }
};

// 특정 학년 조회
export const getGradeByGradeNo = async (gradeNo, token) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/grade/${gradeNo}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching grade with ID ${gradeNo}:`, error);
        throw error;
    }
};

// 학년 추가 (✅ request body 문제 해결)
export const saveGrade = async (gradeData, token) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/grade`, 
            gradeData, // ✅ 요청 바디 추가
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating grade:", error);
        throw error;
    }
};

// 학년 수정
export const updateGrade = async (gradeNo, gradeData, token) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/grade/${gradeNo}`, gradeData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating grade with ID ${gradeNo}:`, error);
        throw error;
    }
};

// 학년 삭제
export const deleteGrade = async (gradeNo, token) => {
    try {
        await axios.delete(`${BACKEND_SERVER}/grade/${gradeNo}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(`Error deleting grade with ID ${gradeNo}:`, error);
        throw error;
    }
};
