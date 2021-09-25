import { useState } from "react";

export function useInput({ type, placeholder }) {
  const [value, setValue] = useState("");
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      maxLength="100"
      style={{ marginBottom: "10px", width: "100%" }}
      placeholder={placeholder}
    />
  );
  return [value, input];
}
