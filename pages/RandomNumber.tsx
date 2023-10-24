// RandomNumber.tsx
import React from 'react';

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

export default RandomNumber;
