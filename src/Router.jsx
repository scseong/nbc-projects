import Home from 'pages/Home';
import Detail from 'pages/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import NotFound from 'pages/NotFound';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';
import { useState } from 'react';

export default function Router() {
  const [user] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login user={user} />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
