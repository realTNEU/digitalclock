import React, { useState, useEffect } from 'react';
import clock from './clock.css'

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US',   
  {
     hour12: true,
     hour: 'numeric',
     minute: 'numeric',
     second: 'numeric',
     timeZoneName:'shortGeneric'
   });

  return (
    <div>
      <h1 className='clock orbitron-font'>{formattedTime}</h1>
    </div>
  );
}

export default Clock;
