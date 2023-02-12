import React, { useState } from "react";

const withCounter = (OriginalComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prev) => prev + 1);
    };

    return <OriginalComponent count={count} incrementCount={incrementCount} />;
  };
  return NewComponent;
};

export default withCounter;
