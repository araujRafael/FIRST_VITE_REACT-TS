import React, { useState } from 'react';
import { useTransition } from 'transition-hook';
import { Button, Component, HomeContainer } from './styled';


const Home: React.FC = () => {
  const [onOff, setOnOff] = useState(false)
  const { stage, shouldMount } = useTransition(onOff, 300) // (state, timeout)

  // from: before the element enters
  // enter: when the element enters
  // leave: before the element exits

  return (
    <HomeContainer >
      <Button
        onClick={() => setOnOff(!onOff)}
      >
        Click
      </Button>
      {
        shouldMount && (
          <Component
            style={{
              color: 'white',
              transition: '0.8s',
              opacity: stage === 'enter' ? 1 : 0
            }}
          />
        )
      }
    </HomeContainer >
  );
}

export default Home;