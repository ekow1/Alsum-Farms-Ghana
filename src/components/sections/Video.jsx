import React from 'react';

const Video = () => {
  return (
    <div className='w-[100%] h-full'>
      <iframe
        allow="fullscreen;autoplay"
        allowFullScreen
        height="100%"
        src="https://streamable.com/e/3pht4n?autoplay=1&muted=1"
        width="100%"
        className='w-full '
        style={{
          border: '1px black', // Remove default iframe border
          display: 'block', // Remove default inline style
          borderRadius: '8px', // Example border-radius
        }}
      ></iframe>
    </div>
  );
};

export default Video;
