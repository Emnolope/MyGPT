// CombinedComponent.tsx
import React from 'react';

// Main Home Component
const Home: React.FC = () => {
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
  );
};

export default Home;

// NumberInput Component
interface NumberInputProps {
  onRangeChange: (range: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ onRangeChange }) => {
  return (
    <input
      type="number"
      placeholder="Enter number range"
      onChange={(e) => onRangeChange(Number(e.target.value))}
      className="bg-black text-white p-2 rounded"
    />
  );
};

// RandomNumber Component
interface RandomNumberProps {
  range: number;
}

const RandomNumber: React.FC<RandomNumberProps> = ({ range }) => {
  const [number, setNumber] = React.useState<number>(0);

  React.useEffect(() => {
    setNumber(Math.floor(Math.random() * range));
  }, [range]);

  return <h3>{number}</h3>;
};
