import { useState } from "react";

export function useInput({ placeholder, propVal }) {
  const [value, setValue] = useState(propVal);
  const input = (
    <textarea
      className="text-center"
      placeholder={placeholder}
      style={{ marginBottom: "10px", width: "100%" }}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      maxLength="100"
    />
  );
  return [value, input];
}
