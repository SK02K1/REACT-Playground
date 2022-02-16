import { useState } from "react";

export const DisableSubmit = () => {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const submitBtnClickHandler = () => {
    console.log(password);
  };
  return (
    <div>
      <h2>04. Disable Submit</h2>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
        placeholder="Enter new password"
      />
      <input
        onChange={(e) => setConfirmPass(e.target.value)}
        value={confirmPass}
        type="text"
        placeholder="Confirm password"
      />
      <button
        disabled={!(password !== "" && password === confirmPass)}
        onClick={submitBtnClickHandler}
      >
        Submit
      </button>
    </div>
  );
};
