import axios from "axios";

const BACKEND_SERVER = "http://localhost:8080";

// 학년 리스트 조회
export const getGradeList = async () => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/grade`);
        return response.data;
    } catch (error) {
        console.error("Error fetching grade list:", error);
        throw error;
    }
};

// 특정 학년 조회
export const getGradeByGradeNo = async (gradeNo) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/grade/${gradeNo}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching grade with ID ${gradeNo}:`, error);
        throw error;
    }
};

// 학년 추가
export const saveGrade = async (gradeData) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/grade`, gradeData);
        return response.data;
    } catch (error) {
        console.error("Error creating grade:", error);
        throw error;
    }
};

// 학년 수정
export const updateGrade = async (gradeNo, gradeData) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/grade/${gradeNo}`, gradeData);
        return response.data;
    } catch (error) {
        console.error(`Error updating grade with ID ${gradeNo}:`, error);
        throw error;
    }
};

// 학년 삭제
export const deleteGrade = async (gradeNo) => {
    try {
        await axios.delete(`${BACKEND_SERVER}/grade/${gradeNo}`);
    } catch (error) {
        console.error(`Error deleting grade with ID ${gradeNo}:`, error);
        throw error;
    }
};
