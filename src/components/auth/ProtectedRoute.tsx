import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
  userType?: 'veteran' | 'employer';
  requiredUserType?: 'veteran' | 'employer';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuthenticated,
  userType,
  requiredUserType
}) => {
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredUserType && userType !== requiredUserType) {
    // Redirect to appropriate dashboard if user type doesn't match
    return <Navigate to={`/${userType}/dashboard`} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 