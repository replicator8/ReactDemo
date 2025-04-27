import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h3>Our differences</h3>

      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Way
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Availability
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Concentration
      </Button>

      {!contentType && <p>Tap a button!</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
