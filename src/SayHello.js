import React from 'react';

function SayHello({ firstName, lastName }) {
  return (
    <div>
      Hello, my name is {firstName} {lastName}.
    </div>
  );
}

const PropTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      return new Error(
        `Hey, the component ${componentName} needs the prop ${propName} to be a string, but you passed a ${typeof props[
          propName
        ]}`
      );
    }
  },
};

SayHello.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default SayHello;
