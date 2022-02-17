import { useState } from "react";

export const AlphaNumericPass = () => {
  const [password, setPassword] = useState("");

  const isAlphaNumeric = () => {
    const alphaNumInfo = [...password].reduce((alphaNum, char) => {
      if (
        char.toLowerCase().charCodeAt(0) >= 97 &&
        char.toLowerCase().charCodeAt(0) <= 122
      ) {
        return { ...alphaNum, hasAlphabet: true };
      } else if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
        return { ...alphaNum, hasNumber: true };
      } else {
        return alphaNum;
      }
    }, {});

    return Object.keys(alphaNumInfo).length === 2;
  };

  return (
    <div className="container">
      <h2>03. AlphaNumeric Password</h2>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
        placeholder="Password"
      />
      {password && !isAlphaNumeric() && (
        <p style={{ color: "red" }}>Must be AlphaNumeric</p>
      )}
    </div>
  );
};
