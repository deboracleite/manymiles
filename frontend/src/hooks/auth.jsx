import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
      const token = localStorage.getItem('@ManyMiles:token');
      const user = localStorage.getItem('@ManyMiles:user');
  
      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        return { token, user: JSON.parse(user) };
      }
  
      return {};
    });
    const signIn = useCallback(async ({ email, password }) => {
      const {
        data: { token, user },
      } = await api.post('/sessions', {
        email,
        password,
      });
      console.log(await api.post('/sessions', {
        email,
        password,
      }));
      localStorage.setItem('@ManyMiles:token', token);
      localStorage.setItem('@ManyMiles:user', JSON.stringify(user));
  
      api.defaults.headers.authorization = `Bearer ${token}`;
  
      setData({ token, user });
    }, []);
  
    const signOut = useCallback(() => {
      localStorage.removeItem('@ManyMiles:token');
      localStorage.removeItem('@ManyMiles:user');
      setData({});
    }, []);
  
    const updateUser = useCallback(
      (user) => {
        localStorage.setItem('@ManyMiles:user', JSON.stringify(user));
        setData({
          token: data.token,
          user,
        });
      },
      [setData, data.token],
    );
    return (
      <AuthContext.Provider
        value={{ user: data.user, signIn, signOut, updateUser }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  function useAuth() {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  }
  
  export { AuthProvider, useAuth };