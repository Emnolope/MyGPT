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

  const fetchRandomNumber = async () => {
    try {
      const response = await fetch(`https://www.random.org/integers/?num=1&min=1&max=${range}&col=1&base=10&format=plain&rnd=new`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const randomNum = await response.text();
      setNumber(Number(randomNum));
    } catch (error) {
      console.error(error);
      // Fallback to the original local random method in case of error
      setNumber(Math.floor(Math.random() * range));
    }
  };

  React.useEffect(() => {
    fetchRandomNumber();
  }, [range]);

  return <h3>{number}</h3>;
};
