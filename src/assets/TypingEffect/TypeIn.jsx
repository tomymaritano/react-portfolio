import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypewriterEffect = () => {
  return (
    <div>
      <h1>
        <Typewriter
          string="Texto animado con react-typewriter-effect"
          delay={50}
          cursor="_"
          cursorStyle={{ color: 'red', fontWeight: 'bold' }}
        />
      </h1>
    </div>
  );
};

export default TypewriterEffect;
