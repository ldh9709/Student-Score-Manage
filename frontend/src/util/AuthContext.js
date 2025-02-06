import React, { createContext, useContext, useEffect, useState } from "react";
import { getCookie, removeCookie } from "./cookieUtil";
import { jwtDecode } from "jwt-decode";

/* 컴포넌트 전역에서 데이터를 공유하는 Context생성 */
const AuthContext = createContext();

// AuthProvider 컴포넌트: 전역 인증 상태를 관리, children : AuthProvider로 감싸진 컴포넌트들
export const AuthProvider = ({ children }) => {
  //token과 teacher정보를 가지고 있는 teacher객체 선언
  const [teacher, setTeacher] = useState({
    token:'',
    teacher:{}
  });

  //실행 시 한 번만 실행
  useEffect(() => {
    //teacher라는 이름의 쿠키를 가져온다
    const cookie = getCookie("teacher"); 
    //cookie나 cookie의 엑세스 토큰이 존재하면
    if (cookie && cookie.accessToken) {
      //엑세스 토큰을 디코딩(디코딩한 토큰에는 teacher정보가 들어가있음)
      const decoded = jwtDecode(cookie.accessToken); 
      //teacher객체에 토큰과 teacher정보 대입
      setTeacher({
        token:cookie.accessToken,
        teacher:decoded
      }); 
    }
  }, []);

  //로그인 시에 실행
  const login = (token) => {
    // 토큰과 디코딩된 사용자 정보를 Context에 저장
    const decoded = jwtDecode(token);
    setTeacher({
            token,
            teacher: decoded,
        });
    };
  
  //로그아웃 시에 실행
  const logout = () => {
    setTeacher({
      token: null,
      teacher: null,
    });
  };

  return (
    <AuthContext.Provider value={{ token: teacher.token, teacher: teacher.teacher , login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useMemberAuth = () => useContext(AuthContext);
