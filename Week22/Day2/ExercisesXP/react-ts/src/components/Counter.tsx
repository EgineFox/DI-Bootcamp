import { useState } from 'react';

type Action = 'increment' | 'decrement' | 'reset' | 'none';

interface CounterState {
  value: number;
  lastAction: Action;
  actionCount: number;
}

const Counter = () => {
  const [counterState, setCounterState] = useState<CounterState>({
    value: 0,
    lastAction: 'none',
    actionCount: 0,
  });

  const handleIncrement = (): void => {
    setCounterState(prev => ({
      value: prev.value + 1,
      lastAction: 'increment',
      actionCount: prev.actionCount + 1,
    }));
  };

  const handleDecrement = (): void => {
    setCounterState(prev => ({
      value: prev.value - 1,
      lastAction: 'decrement',
      actionCount: prev.actionCount + 1,
    }));
  };

  const handleReset = (): void => {
    setCounterState({
      value: 0,
      lastAction: 'reset',
      actionCount: 0,
    });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>Counter: {counterState.value}</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <button 
          onClick={handleDecrement}
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px',
            cursor: 'pointer' 
          }}
        >
          Decrement (-)
        </button>
        
        <button 
          onClick={handleIncrement} 
          style={{ 
            marginLeft: '10px',
            padding: '10px 20px', 
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Increment (+)
        </button>
        
        <button 
          onClick={handleReset} 
          style={{ 
            marginLeft: '10px',
            padding: '10px 20px', 
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none'
          }}
        >
          Reset
        </button>
      </div>

      <div>
        <p>Last Action: <strong>{counterState.lastAction}</strong></p>
        <p>Total Actions: <strong>{counterState.actionCount}</strong></p>
      </div>
    </div>
  );
};

export default Counter;