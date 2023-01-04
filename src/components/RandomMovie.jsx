import React, { useState, useEffect } from 'react';
import { Animate } from 'react-simple-animate';
import ShowCard from './ShowCard';

export default function RandomMovie() {
  const [card, setCard] = useState({});
  useEffect(() => {
    fetch('/api/v3/random')
      .then((res) => res.json())
      .then((data) => { setCard(data); });
  }, []);

  return (
    <div className="d-flex justify-content-center" style={{ backgroundColor: 'ButtonShadow' }}>
      <Animate
        play
        start={{ opacity: 0, filter: 'blur(50px)' }}
        end={{ opacity: 100, filter: 'blur(0)' }}
      >
        <ShowCard movie={card} index={null} />
      </Animate>
    </div>
  );
}
