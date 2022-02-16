import { useState } from "react";

export const TogglePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="container">
      <h2>05. Toggle Password</h2>
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Enter password"
      />
      <button onClick={() => setIsPasswordVisible((prevState) => !prevState)}>
        {isPasswordVisible ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};
