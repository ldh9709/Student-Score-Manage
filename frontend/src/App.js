import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import MainPage from "./components/MainPage";
import AdminPage from "./components/AdminPage";
import StudentModifyPage from "./components/Admin/StudentModifyPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/admin/student/edit/:studentNo" element={<StudentModifyPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
 