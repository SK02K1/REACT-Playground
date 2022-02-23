import { useState } from "react";

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h3>About</h3>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h3>Profile</h3>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h3>Not Found</h3>
    </div>
  );
};

const switchTab = (route) => {
  switch (route) {
    case "/":
      return <Home />;
    case "/profile":
      return <Profile />;
    case "/about":
      return <About />;
    default:
      return <NotFound />;
  }
};

export const SwitchTabs = () => {
  const [route, setRoute] = useState("/");
  return (
    <div className="container">
      <h2>08. Switch Tabs</h2>
      <button onClick={() => setRoute("/")}>Home</button>
      <button onClick={() => setRoute("/about")}>About</button>
      <button onClick={() => setRoute("/profile")}>Profile</button>
      <div>{switchTab(route)}</div>
    </div>
  );
};
