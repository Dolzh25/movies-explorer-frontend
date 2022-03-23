import { Navigate, useLocation, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn }) => {
  const location = useLocation();

  return (
    isLoggedIn
      ? <Outlet />
      : <Navigate to='/' state={{ from: location }} replace />
  )
};

export default ProtectedRoute;
