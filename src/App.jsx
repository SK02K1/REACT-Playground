import { ConfirmPass } from "./components/ConfirmPass";
import { DisableSubmit } from "./components/DisableSubmit";
import { TogglePassword } from "./components/TogglePassword";
import { Tweet } from "./components/Tweet";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Tweet />
      <ConfirmPass />
      <DisableSubmit />
      <TogglePassword />
    </div>
  );
}
