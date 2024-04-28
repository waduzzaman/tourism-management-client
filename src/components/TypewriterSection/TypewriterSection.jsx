import  { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const TypewriterSection = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(1000)
      .typeString('Explore our wide range of Travel Spots')
      .pauseFor(2000)
      .deleteAll()
      .typeString('Discover amazing destinations')
      .pauseFor(2000)
      .deleteAll()
      .typeString('Book your dream vacation today')
      .pauseFor(2000)
      .deleteAll()
      .start();

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <section className="">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold " ref={typewriterRef}></h2>
      </div>
    </section>
  );
};

export default TypewriterSection;
