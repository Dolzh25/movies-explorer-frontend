import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  const location = useLocation();

  return (
    isLoggedIn
      ? children
      : <Navigate to='/signin' state={{ from: location }} replace />
  )
};

export default ProtectedRoute;
