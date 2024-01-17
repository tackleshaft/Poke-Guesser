import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = () => {
  return (
    <div className='typewriter'>
      <span>
        <Typewriter
          words={['Pokemon']}
          loop={2}
          cursor
          cursorStyle="<"
          typeSpeed={50}
          delaySpeed={900}
        />
      </span>
    </div>
  );
};

export default TypeWriter;