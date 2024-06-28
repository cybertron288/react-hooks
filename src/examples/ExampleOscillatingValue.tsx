import React, { useState } from "react";
import useOscillatingValue from "../hooks/useOscillatingValue";

const ExampleOscillatingValue: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const maxValue = 100;

  const oscillatingValue = useOscillatingValue(value, maxValue);

  const incrementValue = () => {
    setValue((prevValue) => (prevValue + 1) % (maxValue + 1));
  };

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Oscillating Value: {oscillatingValue}</p>
      <button onClick={incrementValue}>Increment Value</button>
    </div>
  );
};

export default ExampleOscillatingValue;
