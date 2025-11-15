import React from 'react';

function MessageCard({ messages = [], image, video }) {
  return (
    <div style={{
      minHeight: '800px',        // keeps the card tall enough
      maxHeight: '1000px',        // prevents it from growing too tall
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',  // center content vertically
      padding: '2rem',
      borderRadius: '2rem',
      width: '100%',
      maxWidth: '800px',
      background: 'rgba(255,255,255,0.2)',
      boxSizing: 'border-box',
    }}>
      {image && (
        <img 
          src={image} 
          alt="sweet" 
          style={{ maxHeight: '600px',objectFit: 'contain', width: '100%', borderRadius: '1.5rem', marginBottom: '1rem' }}
        />
      )}

      {video && (
        <video 
          src={video} 
          style={{ maxHeight: '600px', objectFit: 'contain', width: '100%', borderRadius: '1.5rem', marginBottom: '1rem' }}
          controls
          autoPlay
          loop
          
        />
      )}

      {messages.map((msg, i) => (
        <p key={i} style={{ fontSize: 'clamp(1.6rem, 3vw, 1rem)', textAlign: 'center', margin: '0.5rem 0' }}>
          {msg}
        </p>
      ))}
    </div>
  );
}

export default MessageCard;
