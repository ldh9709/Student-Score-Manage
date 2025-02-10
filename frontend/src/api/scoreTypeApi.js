import axios from "axios";

const BACKEND_SERVER = "http://localhost:8080";

// 시험 유형 리스트 조회
export const getScoreTypeList = async (token) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/scoreType`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching scoreType list:", error);
        throw error;
    }
};

// 특정 시험 유형 조회
export const getScoreTypeByScoreTypeNo = async (scoreTypeNo, token) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/scoreType/${scoreTypeNo}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching scoreType with ID ${scoreTypeNo}:`, error);
        throw error;
    }
};

// 시험 유형 추가
export const saveScoreType = async (scoreTypeData, token) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/scoreType`, scoreTypeData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating scoreType:", error);
        throw error;
    }
};

// 시험 유형 수정
export const updateScoreType = async (scoreTypeNo, scoreTypeData, token) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/scoreType/${scoreTypeNo}`, scoreTypeData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating scoreType with ID ${scoreTypeNo}:`, error);
        throw error;
    }
};

// 시험 유형 삭제
export const deleteScoreType = async (scoreTypeNo, token) => {
    try {
        await axios.delete(`${BACKEND_SERVER}/scoreType/${scoreTypeNo}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(`Error deleting scoreType with ID ${scoreTypeNo}:`, error);
        throw error;
    }
};
