import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('agrivision-profile');
    return saved ? JSON.parse(saved) : { location: 'Central India', farmSize: 1, unit: 'Acres' };
  });

  useEffect(() => {
    localStorage.setItem('agrivision-profile', JSON.stringify(profile));
  }, [profile]);

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
};
