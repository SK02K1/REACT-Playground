import { AddToCart } from "./components/AddToCart";
import { AlphaNumericPass } from "./components/AlphaNumericPass";
import { ConfirmPass } from "./components/ConfirmPass";
import { DarkMode } from "./components/DarkMode";
import { DisableSubmit } from "./components/DisableSubmit";
import { Figma } from "./components/Figma";
import { ListLike } from "./components/ListLike";
import { OutOfStock } from "./components/OutOfStock";
import { SwitchTabs } from "./components/SwitchTabs";
import { ToastContainer } from "./components/Toast";
import { Todo } from "./components/Todo";
import { TogglePassword } from "./components/TogglePassword";
import { Tweet } from "./components/Tweet";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Tweet />
      <ConfirmPass />
      <AlphaNumericPass />
      <DisableSubmit />
      <TogglePassword />
      <Figma />
      <AddToCart />
      <SwitchTabs />
      <ToastContainer />
      <Todo />
      <DarkMode />
      <ListLike />
      <OutOfStock />
    </div>
  );
}
