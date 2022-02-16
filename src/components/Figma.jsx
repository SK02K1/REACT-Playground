import { useState } from "react";

const fonts = ["Arial", "Verdana", "Tahoma", "Georgia", "Garamond"];
const alignments = ["left", "center", "right", "justify"];
const weights = ["400", "600"];

export const Figma = () => {
  const [color, setColor] = useState("#000000");
  const [fontFamily, setFontFamily] = useState(fonts[0]);
  const [fontWeight, setFontWeight] = useState(weights[0]);
  const [textAlign, setTextAlign] = useState(alignments[0]);
  const [fontSize, setFontSize] = useState(16);
  return (
    <div>
      <h2>06. Designer tool (mini figma)</h2>

      <label htmlFor="color">
        color: {""}
        <input
          onChange={(e) => setColor(e.target.value)}
          type="color"
          value={color}
        />
      </label>

      <label htmlFor="text-align">
        text-align: {""}
        <select
          onChange={(e) => setTextAlign(e.target.value)}
          name="text-align"
          id="text-align"
        >
          {alignments.map((alignment) => (
            <option key={alignment} value={alignment}>
              {alignment}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="font-family">
        font-family: {""}
        <select
          onChange={(e) => setFontFamily(e.target.value)}
          name="font-family"
          id="font-family"
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="font-weight">
        font-weight: {""}
        <select
          onChange={(e) => setFontWeight(e.target.value)}
          name="font-weight"
          id="font-weight"
        >
          {weights.map((weight) => (
            <option key={weight} value={weight}>
              {weight}
            </option>
          ))}
        </select>
      </label>

      <span>font-size({`${fontSize}px`}): </span>
      <button onClick={() => setFontSize((prevSize) => prevSize - 8)}>-</button>
      <button onClick={() => setFontSize((prevSize) => prevSize + 8)}>+</button>

      <div
        className="frame"
        style={{
          color,
          fontFamily,
          fontWeight,
          textAlign,
          fontSize: `${fontSize}px`
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        doloremque ratione eveniet doloribus quibusdam quo. Quia tempore quis,
        quae esse eaque atque aliquid similique dignissimos cumque corrupti
        ducimus vitae. Qui.
      </div>
    </div>
  );
};
