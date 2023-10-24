// index.tsx
import React from 'react';
import RandomNumber from './RandomNumber';
import NumberInput from './NumberInput';

export default function Home() {
  const [range, setRange] = React.useState(10000000);
  const [randomNumbers, setRandomNumbers] = React.useState([
    <RandomNumber key={0} range={range} />,
    <RandomNumber key={1} range={range} />,
    <RandomNumber key={2} range={range} />,
  ]);

  const addRandomNumber = () => {
    setRandomNumbers([...randomNumbers, <RandomNumber key={randomNumbers.length} range={range} />]);
  };

  return (
    <main>
      <h1>Horizon</h1>
      <h1 className='text-blue-400'> Blue</h1>
      <NumberInput onRangeChange={setRange}/>
      <p>HiErbie</p>
      {randomNumbers}
      <button onClick={addRandomNumber}>Add Random Number</button>
    </main>
  )
}
