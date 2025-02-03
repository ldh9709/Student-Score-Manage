import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import MainPage from "./components/MainPage";
import AdminPage from "./components/AdminPage";
import StudentManagePage from "./components/Admin/StudentManagePage";
import ScoreManagePage from "./components/Admin/ScoreManagePage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/students" element={<StudentManagePage />} />
          <Route path="/score/:studentNo" element={<ScoreManagePage />} /> {/* 🔥 추가 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
 