import axios from "axios";

const BACKEND_SERVER = "http://localhost:8080";

// 학생 리스트 조회
export const getStudentList = async () => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/student`);
        return response.data;
    } catch (error) {
        console.error("Error fetching student list:", error);
        throw error;
    }
};

// 특정 학생 조회
export const getStudentByStudentNo = async (studentNo) => {
    try {
        const response = await axios.get(`${BACKEND_SERVER}/student/${studentNo}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching student with ID ${studentNo}:`, error);
        throw error;
    }
};

// 학생 추가
export const saveStudent = async (studentData) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/student`, studentData);
        return response.data;
    } catch (error) {
        console.error("Error creating student:", error);
        throw error;
    }
};

// 학생 수정
export const updateStudent = async (studentNo, studentData) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/student/${studentNo}`, studentData);
        return response.data;
    } catch (error) {
        console.error(`Error updating student with ID ${studentNo}:`, error);
        throw error;
    }
};

// 학생 삭제
export const deleteStudent = async (studentNo) => {
    try {
        await axios.delete(`${BACKEND_SERVER}/student/${studentNo}`);
    } catch (error) {
        console.error(`Error deleting student with ID ${studentNo}:`, error);
        throw error;
    }
};
