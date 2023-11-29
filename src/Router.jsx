import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute';
import { useState } from 'react';
import { Detail, Home, Login, NotFound, Profile } from 'pages';

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
