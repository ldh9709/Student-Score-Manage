import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import MainPage from "./components/MainPage";
import AdminPage from "./components/AdminPage";
import StudentModifyPage from "./components/Admin/StudentModifyPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { AuthProvider } from "./util/AuthContext";
import PrivateRoute from "./util/PrivateRoute";

import "./App.css";

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* 인증된 사용자만 접근 가능 */}
          <Route path="/admin/*" element={<PrivateRoute element={<AdminPage/>} />} />
          <Route path="/admin/student/edit/:studentNo" element={<PrivateRoute element={<StudentModifyPage/>} />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
 