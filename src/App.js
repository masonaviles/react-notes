import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [state ] = useState('');

  function handleChange(e){}

  return (
      <div className='App'>
          <ingput type='text' value={state} onChange={handleChange} />
      </div>
  );
}
