import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

import { isAuth } from './services/auth';

const PrivateRoute = ({ children }) => {
  return isAuth() ? children : <Navigate to="/" />;
};

const RoutesDOM = () => (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/signup" element={<h1>SignUp</h1>} />
      <Route
        path="/Home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  </BrowserRouter>
);

export default RoutesDOM;
