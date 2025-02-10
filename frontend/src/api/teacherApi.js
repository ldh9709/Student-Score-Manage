import axios from "axios";

const BACKEND_SERVER = "http://localhost:8080";


// 로그인
export const loginAction = async (teacherData) => {
    try {
        const header = {headers: {"Content-Type": "application/x-www-form-urlencoded"}, withCredentials: true }

        const form = new FormData()
        form.append('username', teacherData.teacherId)
        form.append('password', teacherData.teacherPassword)
    
        const response = await axios.post(`${BACKEND_SERVER}/login`, form, header,);
        return response.data;
    } catch (error) {
        console.error("Error login: ", error);
    }
}

//로그아웃
export const logout = async () => {
    const response = await fetch(`${BACKEND_SERVER}/logout`, {
        method: 'POST',
        credentials: 'include',// 브라우저가 자동으로 쿠키를 포함하도록 설정
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.url;
};

// 회원 가입
export const saveTeacher = async (teacherData) => {
    try {
        const response = await axios.post(`${BACKEND_SERVER}/teacher`, teacherData);
        return response.data;
    } catch (error) {
        console.error("Error creating teacher:", error);
        throw error;
    }
};

// 회원 수정
export const updateTeacher = async (teacherNo, teacherData, token) => {
    try {
        const response = await axios.put(`${BACKEND_SERVER}/teacher/${teacherNo}`, teacherData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating teacher with ID ${teacherNo}:`, error);
        throw error;
    }
};

// 회원 탈퇴
export const deleteTeacher = async (teacherNo, token) => {
    try {
        await axios.delete(`${BACKEND_SERVER}/teacher/${teacherNo}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(`Error deleting teacher with ID ${teacherNo}:`, error);
        throw error;
    }
};
