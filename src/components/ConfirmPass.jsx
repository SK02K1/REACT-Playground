import { useState } from "react";

export const ConfirmPass = () => {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  return (
    <div>
      <h2>02. Confirm Password</h2>
      <form>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          placeholder="Enter password"
        />
        <input
          onChange={(e) => setConfirmPass(e.target.value)}
          value={confirmPass}
          type="text"
          placeholder="Confirm Password"
        />
      </form>

      {confirmPass !== "" && password !== "" ? (
        confirmPass === password ? (
          <p style={{ color: "limegreen" }}>All set</p>
        ) : (
          <p style={{ color: "red" }}>Please check</p>
        )
      ) : (
        ""
      )}
    </div>
  );
};
