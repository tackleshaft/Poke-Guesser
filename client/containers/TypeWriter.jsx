import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = ({pokemon}) => {

  return (
    <div className='typewriter'>
      <span>
        <Typewriter
          words={[pokemon]}
          loop={2}
          cursor
          cursorStyle="<"
          typeSpeed={50}
        />
      </span>
    </div>
  );
};

export default TypeWriter;