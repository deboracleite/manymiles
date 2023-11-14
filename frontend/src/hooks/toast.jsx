import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastContainer from '../components/toastContainer';

const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const addToast = useCallback(
    ({ title, type, description }) => {
      const id = uuidv4();
      const toast = {
        id,
        type,
        title,
        description,
      };
      setMessages([...messages, toast]);
    },
    [],
  );
  const removeToast = useCallback((id) => {
    setMessages(messages.filter(message => message.id !== id));
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };