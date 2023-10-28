import React from 'react';

import { useTransition } from 'react-spring';
import Toast from './toast';
import { Container } from './styles';

const ToastContainer = ({ messages }) => {
    console.log(messages)
  const messagesWithTransitions = messages && messages.length ? useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  ): [];
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;