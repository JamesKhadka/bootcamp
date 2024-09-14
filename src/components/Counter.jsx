import React, { useEffect, useState, useRef } from 'react';

const Counters = () => {
  // Counter function inside the same component
  const Counter = ({ end, label }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasStarted) {
              setHasStarted(true);
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
      );
      observer.observe(counterRef.current);

      return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
      if (hasStarted) {
        let start = 0;
        const duration = 2000; // Animation duration in milliseconds
        const step = end / (duration / 16); // Increment step per frame (~16ms for 60fps)

        const counter = setInterval(() => {
          start += step;
          if (start >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16); // Run animation at roughly 60fps

        return () => clearInterval(counter);
      }
    }, [hasStarted, end]);

    return (
      <div ref={counterRef} className="counter">
        <div className="text-4xl font-bold text-cyan-600">{count}</div>
        <p className="text-gray-500">{label}</p>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8 text-pink-600">WHY US...</h1>

        {/* Grid of Counters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Counter end={5} label="Years of Experience" />
          <Counter end={1200} label="Total Visitors" />
          <Counter end={20} label="Rooms Available" />
          <Counter end={500} label="Happy Guests" />
        </div>
      </div>
    </section>
  );
};

export default Counters;
