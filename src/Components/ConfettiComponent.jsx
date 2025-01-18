import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const CustomConfettiComponent = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Stop after 5 seconds
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Custom Confetti Shapes</h1>
      <button onClick={triggerConfetti} style={{ marginTop: '20px' }}>
        Trigger Confetti
      </button>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={150}
          gravity={0.4}
          wind={0.02}
          colors={['#ff5733', '#33ff57', '#3357ff', '#ff33b5']}
          drawShape={(ctx) => {
            // Example: Star Shape
            const radius = 10;
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
              const x = radius * Math.cos((i * 2 * Math.PI) / 5);
              const y = radius * Math.sin((i * 2 * Math.PI) / 5);
              ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
          }}
        />
      )}
    </div>
  );
};

export default CustomConfettiComponent;
