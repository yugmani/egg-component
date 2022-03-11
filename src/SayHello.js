import React from 'react';
import PropTypes from 'prop-types';

function SayHello({ firstName, lastName }) {
  return (
    <div>
      Hello, my name is {firstName} {lastName}.
    </div>
  );
}

// const PropTypes = {
//   string(props, propName, componentName) {
//     if (typeof props[propName] !== 'string') {
//       return new Error(
//         `Hey, the component ${componentName} needs the prop ${propName} to be a string, but you passed a ${typeof props[
//           propName
//         ]}`
//       );
//     }
//   },
// };

SayHello.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default SayHello;

// Errpr Message in the console when type of prop was invalid
// Warning: Failed prop type: Invalid prop `lastName` of type `boolean` supplied to `SayHello`, expected `string`.
// at SayHello (https://react-rhzxnr.stackblitz.io/~/src/SayHello.js:8:21)
// at App

// Error message in the console when prop was not supplied
// Warning: Failed prop type: The prop `lastName` is marked as required in `SayHello`, but its value is `undefined`.
// at SayHello (https://react-rhzxnr.stackblitz.io/~/src/SayHello.js:8:21)
// at App
