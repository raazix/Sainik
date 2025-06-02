import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  userType: 'veteran' | 'employer';
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, userType, isAuthenticated }) => {
  const currentUserType = localStorage.getItem('userType') as 'veteran' | 'employer';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (currentUserType !== userType) {
    return <Navigate to={currentUserType === 'veteran' ? '/veteran' : '/employer/dashboard'} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 