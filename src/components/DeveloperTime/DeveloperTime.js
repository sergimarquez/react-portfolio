import { useState, useEffect, useRef } from 'react';
import './DeveloperTime.css';

const DeveloperTime = () => {
  const startDate = useRef(new Date('2015-01-01').getTime());
  const [timeElapsed, setTimeElapsed] = useState(
    Date.now() - startDate.current
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(Date.now() - startDate.current);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const milliseconds = timeElapsed.toString();
  const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24)).toLocaleString(
    'en-US'
  );

  return (
    <p className="about__desc">
      I&apos;ve been coding for{' '}
      <strong>
        <span className="fixed-seconds" title={`That's ${milliseconds} ms!`}>
          {milliseconds}
        </span>{' '}
        milliseconds
      </strong>{' '}
      — that&apos;s <strong>{days} days</strong> as a developer!
    </p>
  );
};

export default DeveloperTime;
