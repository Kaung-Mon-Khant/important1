import React from 'react';

function MessageCard({ messages = [], image, video }) {
  return (
    <div style={{
      minHeight: '50vh',          // 50% of viewport height
      maxHeight: '90vh',          // max 90% of viewport height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      borderRadius: '2rem',
      width: '90%',
      maxWidth: '800px',
      background: 'rgba(255,255,255,0.2)',
      boxSizing: 'border-box',
    }}>
      {image && (
        <img 
          src={image} 
          alt="sweet" 
          style={{
            maxHeight: '50vh',    // responsive to viewport
            width: '100%',
            objectFit: 'contain',
            borderRadius: '1.5rem',
            marginBottom: '1rem'
          }}
        />
      )}

      {video && (
        <video 
          src={video} 
          style={{
            maxHeight: '50vh',    // responsive
            width: '100%',
            objectFit: 'contain',
            borderRadius: '1.5rem',
            marginBottom: '1rem'
          }}
          controls
          autoPlay
          loop
          muted
        />
      )}

      {messages.map((msg, i) => (
        <p key={i} style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', 
          textAlign: 'center', 
          margin: '0.5rem 0'
        }}>
          {msg}
        </p>
      ))}
    </div>
  );
}

export default MessageCard;
