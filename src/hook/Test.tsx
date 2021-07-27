import React, { FC, useEffect } from "react";

interface TestProps {
  onChange: () => void;
}
const Test: FC<TestProps> = ({ onChange }) => {
  useEffect(() => {
    console.log("re-Render");
  }, [onChange]);
  return (
    <div>
      <button onClick={onChange}>Test</button>
    </div>
  );
};

export default Test;
