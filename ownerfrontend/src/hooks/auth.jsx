import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
      const token = localStorage.getItem('@ManyMiles:token');
      const owner = localStorage.getItem('@ManyMiles:owner');
  
      console.log(token);
      if (token && owner) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        return { token, owner: JSON.parse(owner) };
      }
  
      return {};
    });
    const signIn = useCallback(async ({ email, password }) => {
      const {
        data: { token, owner },
      } = await api.post('/sessionsOwner', {
        email,
        password,
      });
      console.log(await api.post('/sessionsOwner', {
        email,
        password,
      }));
      localStorage.setItem('@ManyMiles:token', token);
      localStorage.setItem('@ManyMiles:user', JSON.stringify(owner));
  
      api.defaults.headers.authorization = `Bearer ${token}`;
  
      setData({ token, owner });
    }, []);
  
    const signOut = useCallback(() => {
      localStorage.removeItem('@ManyMiles:token');
      localStorage.removeItem('@ManyMiles:owner');
      setData({});
    }, []);
  
    const updateOwner = useCallback(
      (owner) => {
        localStorage.setItem('@ManyMiles:owner', JSON.stringify(owner));
        setData({
          token: data.token,
          owner,
        });
      },
      [setData, data.token],
    );
    return (
      <AuthContext.Provider
        value={{ owner: data.owner, signIn, signOut, updateOwner }}
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