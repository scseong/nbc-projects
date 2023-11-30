import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ isLogin }) {
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
