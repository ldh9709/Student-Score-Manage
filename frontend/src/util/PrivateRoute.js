import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useMemberAuth } from "../util/AuthContext"; // AuthContext에서 인증 정보 가져오기

const PrivateRoute = ({ element }) => {
  const auth = useMemberAuth();
  const token = auth?.token || null;
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (token !== null) {
      setLoading(false);
    }
  }, [token]);

  if (loading) return <div>Loading...</div>;

  //로그인 안 했으면 /login으로 리다이렉트
  return token ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
