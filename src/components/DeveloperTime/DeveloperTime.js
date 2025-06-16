import { useState, useEffect, useRef } from 'react';
import './DeveloperTime.css';

const DeveloperTime = () => {
  const startDate = useRef(new Date('2015-09-01').getTime());
  const [timeElapsed, setTimeElapsed] = useState(Date.now() - startDate.current);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(Date.now() - startDate.current);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const milliseconds = timeElapsed.toString();
  const totalDays = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
  const years = Math.floor(totalDays / 365);
  const days = totalDays % 365;

  return (
    <p className="about__desc">
      I&apos;ve been coding for{' '}
      <strong>
        <span className="fixed-seconds" title={`That's ${milliseconds} ms!`}>
          {milliseconds}
        </span>{' '}
        milliseconds
      </strong>{' '}
      — that&apos;s <strong>{years} years and {days} days</strong> of continuous learning.
    </p>
  );
};

export default DeveloperTime;
