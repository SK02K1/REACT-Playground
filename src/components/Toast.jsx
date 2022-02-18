import { useState } from "react";

const Toast = ({
  text,
  backgroundColor = "#bbb",
  toastState,
  toggleToastState
}) => {
  return (
    <div
      className="toast"
      style={{ backgroundColor, display: toastState ? "flex" : "none" }}
    >
      <span>{text}</span>
      <button onClick={toggleToastState}>hide</button>
    </div>
  );
};

export const ToastContainer = () => {
  const [isToastActive, setIsToastActive] = useState(false);
  const toggleToastState = () => setIsToastActive(!isToastActive);
  return (
    <div className="container">
      <h2>09. Toast</h2>
      <button onClick={toggleToastState} disabled={isToastActive}>
        Show Toast
      </button>
      <Toast
        text="This is an default toast"
        toastState={isToastActive}
        toggleToastState={toggleToastState}
      />
    </div>
  );
};
