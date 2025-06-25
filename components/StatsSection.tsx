'use client';

import { useEffect, useState } from 'react';

function Counter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-yellow-500">{count}+</p>
      <p className="text-gray-700 font-medium mt-2">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="mt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-10">Our Impact in Numbers</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <Counter target={1000} label="Products Delivered" />
        <Counter target={25} label="Schools Partnered" />
        <Counter target={4} label="Years of Service" />
        <Counter target={1500} label="Happy Customers" />
      </div>
    </section>
  );
}
