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

export const SwitchTabs = () => {
  const [Component, setComponent] = useState(null);
  return (
    <div className="container">
      <h2>08. Switch Tabs</h2>
      <button onClick={() => setComponent(Home)}>Home</button>
      <button onClick={() => setComponent(About)}>About</button>
      <button onClick={() => setComponent(Profile)}>Profile</button>
      <div className="container">{Component ?? "select tab ☝"}</div>
    </div>
  );
};
