import { stats } from "@/lib/data";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <Reveal as="dl" className="stats-bar" aria-label="Career highlights">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <dt className="stat-label">{stat.label}</dt>
          <dd className="stat-value">
            <Counter target={stat.target} suffix={stat.suffix} />
          </dd>
        </div>
      ))}
    </Reveal>
  );
}
