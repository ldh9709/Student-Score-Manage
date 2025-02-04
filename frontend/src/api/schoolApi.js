import axios from "axios";

const BACKEND_SERVER = "http://localhost:8080";

// 학교 리스트 조회
export const getSchoolList = async () => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/school`);
        return response.data;
    } catch (error) {
        console.error("Error fetching school list:", error);
        throw error;
    }
};

// 특정 학교 조회
export const getSchoolBySchoolNo = async (schoolNo) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/school/${schoolNo}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching school with ID ${schoolNo}:`, error);
        throw error;
    }
};

// 학교 추가
export const saveSchool = async (schoolData) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/school`, schoolData);
        return response.data;
    } catch (error) {
        console.error("Error creating school:", error);
        throw error;
    }
};

// 학교 수정
export const updateSchool = async (schoolNo, schoolData) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/school/${schoolNo}`, schoolData);
        return response.data;
    } catch (error) {
        console.error(`Error updating school with ID ${schoolNo}:`, error);
        throw error;
    }
};

// 학교 삭제
export const deleteSchool = async (schoolNo) => {
    try {
        await axios.delete(`${BACKEND_SERVER}/school/${schoolNo}`);
    } catch (error) {
        console.error(`Error deleting school with ID ${schoolNo}:`, error);
        throw error;
    }
};
