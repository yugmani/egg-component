import React from 'react';
import './style.css';
import SayHello from './SayHello';

export default function App() {
  const Message = (props) => <div style={message}>{props.text}</div>;

  return (
    <div className="container">
      <Message text="Hello World" />
      {Message({ text: 'Goodbye World!' })}
      <SayHello firstName={true} lastName={false} />
    </div>
  );
}

const message = {
  color: 'blue',
  fontSize: '20px',
  padding: '10px',
  backgroundColor: 'whitesmoke',
};
