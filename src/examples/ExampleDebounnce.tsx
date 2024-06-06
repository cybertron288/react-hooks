import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const ExampleDebounnce = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, 500);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Input Value: {inputValue}</p>
      <p>Debounced Value: {debouncedInputValue}</p>
    </div>
  );
};

export default ExampleDebounnce;
