import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute';
import { Detail, Home, Login, NotFound, Profile } from 'pages';
import { useSelector } from 'react-redux';

export default function Router() {
  const isLogin = useSelector(({ auth }) => auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login isLogin={isLogin} />} />
        <Route element={<ProtectedRoute isLogin={isLogin} />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
