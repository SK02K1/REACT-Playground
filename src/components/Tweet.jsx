import { useState } from "react";

export const Tweet = () => {
  const [tweet, setTweet] = useState("");
  return (
    <div>
      <h2>01. Tweet Component</h2>
      <textarea
        onChange={(e) => setTweet(e.target.value)}
        value={tweet}
        cols="30"
        rows="10"
        maxLength="30"
        placeholder="What's happening?"
      ></textarea>
      <p>{30 - tweet.length}</p>
      <button disabled={!(tweet.length > 0)}>Tweet</button>
    </div>
  );
};
