import axios from "axios";

const BACKEND_SERVER = "http://localhost:8080";

// 과목 리스트 조회
export const getSubjectList = async (token) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/subject`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching subject list:", error);
        throw error;
    }
};

// 특정 과목 조회
export const getSubjectBySubjectNo = async (subjectNo, token) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/subject/${subjectNo}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching subject with ID ${subjectNo}:`, error);
        throw error;
    }
};

// 과목 추가
export const saveSubject = async (subjectData, token) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/subject`, subjectData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating subject:", error);
        throw error;
    }
};

// 과목 수정
export const updateSubject = async (subjectNo, subjectData, token) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/subject/${subjectNo}`, subjectData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating subject with ID ${subjectNo}:`, error);
        throw error;
    }
};

// 과목 삭제
export const deleteSubject = async (subjectNo, token) => {
    try {
        await axios.delete(`${BACKEND_SERVER}/subject/${subjectNo}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(`Error deleting subject with ID ${subjectNo}:`, error);
        throw error;
    }
};
