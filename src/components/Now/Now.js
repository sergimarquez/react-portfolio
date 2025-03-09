import { now } from '../../portfolio';
import './Now.css';

const Now = () => {
  const lastUpdated = 'February 2025';

  return (
    <section className="section now" id="now">
      <h2 className="section__title">What I&apos;m Working On Now</h2>
      <ul className="now__list">
        {now.map((item) => (
          <li key={item.substring(0, 15)}>{item}</li>
        ))}
      </ul>
      <p className="now__update">
        📅<em>Last updated: {lastUpdated}</em>
      </p>
    </section>
  );
};

export default Now;
