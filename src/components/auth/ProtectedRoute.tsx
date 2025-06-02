import React from 'react';
import { Navigate } from 'react-router-dom';

type UserType = 'veteran' | 'employer';

interface ProtectedRouteProps {
  children: React.ReactNode;
  userType: UserType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, userType }) => {
  // For now, we'll just check if the user is logged in
  // In a real app, you would check against your auth state
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const currentUserType = localStorage.getItem('userType') as UserType;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (currentUserType !== userType) {
    return <Navigate to={currentUserType === 'veteran' ? '/veteran' : '/employer'} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 