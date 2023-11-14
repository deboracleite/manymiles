import React from 'react';

import { useTransition } from 'react-spring';
import Toast from './toast';
import { Container } from './styles';

const ToastContainer = ({messages}) => {
  if(!messages || !messages.length) return (<></>) 
  const [transitions] = useTransition(
    messages,
    () => ({
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    }),
  );
  return (
    <Container>
      {transitions((style, item, props) => (
        <Toast key={`${Math.random()}`} style={props} message={item} />
      ))}
    </Container>

  );
};

export default ToastContainer;