"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  loginAsAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  logoClickCount: number;
  incrementLogoClicks: () => void;
  resetLogoClicks: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_PASSWORD = 'anshkumar3931_admin_2024'; // Fixed password
const LOGO_CLICKS_REQUIRED = 3;

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);

  useEffect(() => {
    // Check if admin session exists in localStorage
    const adminSession = localStorage.getItem('admin_session');
    if (adminSession) {
      setIsAdmin(true);
    }
  }, []);

  const loginAsAdmin = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem('admin_session', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    setLogoClickCount(0);
    localStorage.removeItem('admin_session');
  };

  const incrementLogoClicks = () => {
    setLogoClickCount(prev => prev + 1);
  };

  const resetLogoClicks = () => {
    setLogoClickCount(0);
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        loginAsAdmin,
        logoutAdmin,
        logoClickCount,
        incrementLogoClicks,
        resetLogoClicks,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
