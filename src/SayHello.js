import React from 'react';

export default function SayHello({ firstName, lastName }) {
  return (
    <div>
      Hello, my name is {firstName} {lastName}.
    </div>
  );
}

// SayHello.propTypes = {
//   firstName(props, propName, componentName){

//   }
// }
