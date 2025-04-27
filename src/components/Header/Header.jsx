import logo from "/logo-name.svg";
import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header>
      <img src={logo} alt="Result" />

      <span>Time here {time.toLocaleTimeString()}</span>
    </header>
  );
}
