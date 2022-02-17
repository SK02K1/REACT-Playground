import { useState } from "react";

const LikeButton = () => {
  const [isBtnLiked, setIsBtnLiked] = useState(false);
  return (
    <button onClick={() => setIsBtnLiked(!isBtnLiked)}>
      {isBtnLiked ? "unlike" : "like"}
    </button>
  );
};

const mentors = ["Tanay Pratap", "Akanksha", "Vikram Santhalia"];

export const ListLike = () => {
  return (
    <div className="container">
      <h2>12. Like in a list</h2>
      <h3>
        OG Mentors{" "}
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>
      </h3>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor}>
            <span>{mentor}</span>
            <LikeButton />
          </li>
        ))}
      </ul>
    </div>
  );
};
