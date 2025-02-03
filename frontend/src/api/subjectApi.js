import axios from "axios";

const BACKEND_SERVER = "http://localhost:8080";

// 과목 리스트 조회
export const getSubjectList = async () => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/subject`);
        return response.data;
    } catch (error) {
        console.error("Error fetching subject list:", error);
        throw error;
    }
};

// 특정 과목 조회
export const getSubjectBySubjectNo = async (subjectNo) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/subject/${subjectNo}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching subject with ID ${subjectNo}:`, error);
        throw error;
    }
};

// 과목 추가
export const saveSubject = async (subjectData) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/subject`, subjectData);
        return response.data;
    } catch (error) {
        console.error("Error creating subject:", error);
        throw error;
    }
};

// 과목 수정
export const updateSubject = async (subjectNo, subjectData) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/subject/${subjectNo}`, subjectData);
        return response.data;
    } catch (error) {
        console.error(`Error updating subject with ID ${subjectNo}:`, error);
        throw error;
    }
};

// 과목 삭제
export const deleteSubject = async (subjectNo) => {
    try {
        await axios.delete(`${BACKEND_SERVER}/subject/${subjectNo}`);
    } catch (error) {
        console.error(`Error deleting subject with ID ${subjectNo}:`, error);
        throw error;
    }
};
