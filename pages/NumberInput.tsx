// NumberInput.tsx
import React from 'react';

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

export default NumberInput;