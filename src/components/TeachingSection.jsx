import { data } from "../data";
import WayToTeach from "./WayToTeach";

export default function TeachingSection() {
  return (
    <section>
      <h3>Our way to teach</h3>

      <ul>
        {data.map((el) => (
          <WayToTeach key={el.title} {...el} />
        ))}
      </ul>
    </section>
  );
}
