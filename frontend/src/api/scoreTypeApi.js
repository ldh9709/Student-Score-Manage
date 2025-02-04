import axios from "axios";

const BACKEND_SERVER = "http://localhost:8080";

// 시험 유형 리스트 조회
export const getScoreTypeList = async () => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/scoreType`);
        return response.data;
    } catch (error) {
        console.error("Error fetching scoreType list:", error);
        throw error;
    }
};

// 특정 시험 유형 조회
export const getScoreTypeByScoreTypeNo = async (scoreTypeNo) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/scoreType/${scoreTypeNo}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching scoreType with ID ${scoreTypeNo}:`, error);
        throw error;
    }
};

// 시험 유형 추가
export const saveScoreType = async (scoreTypeData) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/scoreType`, scoreTypeData);
        return response.data;
    } catch (error) {
        console.error("Error creating scoreType:", error);
        throw error;
    }
};

// 시험 유형 수정
export const updateScoreType = async (scoreTypeNo, scoreTypeData) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/scoreType/${scoreTypeNo}`, scoreTypeData);
        return response.data;
    } catch (error) {
        console.error(`Error updating scoreType with ID ${scoreTypeNo}:`, error);
        throw error;
    }
};

// 시험 유형 삭제
export const deleteScoreType = async (scoreTypeNo) => {
    try {
        await axios.delete(`${BACKEND_SERVER}/scoreType/${scoreTypeNo}`);
    } catch (error) {
        console.error(`Error deleting scoreType with ID ${scoreTypeNo}:`, error);
        throw error;
    }
};
