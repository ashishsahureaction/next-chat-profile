// components/Greeting.tsx

import React from 'react';

interface GreetingProps {
  time: Date;
  
}

const Greeting: React.FC<GreetingProps> = ({ time }) => {

  const hour = time.getHours();
  let greeting = '';
  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return <>{greeting}</>;
};

export default Greeting;
