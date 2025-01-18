import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const MyWebcam = () => {
  const webcamRef = useRef(null);
  const [screenshot, setScreenshot] = useState(null);
  const [facingMode, setFacingMode] = useState('user'); // 'user' for front, 'environment' for back
  const [error, setError] = useState(null);

  // Capture a screenshot
  const captureScreenshot = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setScreenshot(imageSrc);
    }
  };

  // Toggle between front and back cameras
  const toggleCamera = () => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>React Webcam - All Features</h1>
      
      {/* Display Webcam Feed */}
      <div style={{ margin: '20px auto', width: '80%', maxWidth: '640px' }}>
        {error ? (
          <p style={{ color: 'red' }}>Error: {error}</p>
        ) : (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: facingMode,
            }}
            onUserMediaError={(e) => setError('Permission denied or camera not accessible.')}
          />
        )}
      </div>

      {/* Buttons */}
      <div>
        <button onClick={captureScreenshot} style={{ marginRight: '10px' }}>
          Capture Screenshot
        </button>
        <button onClick={toggleCamera}>
          Toggle Camera ({facingMode === 'user' ? 'Front' : 'Back'})
        </button>
      </div>

      {/* Display Screenshot */}
      {screenshot && (
        <div style={{ marginTop: '20px' }}>
          <h2>Captured Screenshot:</h2>
          <img src={screenshot} alt="Screenshot" style={{ maxWidth: '80%', border: '1px solid #ddd' }} />
        </div>
      )}
    </div>
  );
};

export default MyWebcam;
