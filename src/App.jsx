import React, { useState } from 'react';
import MessageCard from './components/MessageCard.jsx';
import emailjs from '@emailjs/browser';

const messages = [
  "I saw this and thought of you 💭",
  "A little smile for your day 😊",
  "The scenery is nice, but your smile is even more beautiful 💞❤️",
  "Can't stop thinking about you 💗",
  "Even sunsets pale compared to your happiness 😌💝",
  "In that day Every heartbeat feels sweeter when we’re side by side 🥰",
  "I wanna stay with u like this 😁",
  "But always u sent me this 😒",
  "That moment, seeing you happy on your birthday, is a memory I’ll keep forever 💝🎉",
  "", "", "", "", "", "", "",
  "ကျွန်တော် စိမ့်ကိုအရမ်းချစ်တယ် အဲနေ့က စိမ့်ကိုအလေးမထားသလိုဖြစ်သွားတဲ့အတွက်လဲ ကျွန်တော်တောင်းပန်ပါတယ်နော် စိမ့် နောက်ဆိုဒါမျိုးမဖြစ်စေရပါဘူး ကျွန်တော်ကတိပေးပါတယ်နော် စိမ့်", 
  "ကျွန်တော့်ဘ၀ရဲ့ ဝင်သက်ထွက်သက်တိုင်းမှာ အရမ်းချစ်ရတဲ့ကောင်မလေးဖြစ်တာကြောင့် ကျွန်တော် ဒီထပ်ပိုပီး အလေးထားပီး တန်ဖိုးထားပါ့မယ် ကျွန်တော်ကိုစိတ်မဆိုးပါနဲ့တော့နော် စိမ့်",
];

const images = [
  "/images/Saint01.jpg", "/images/Saint02.jpg", "/images/Saint03.jpg", "/images/Saint04.jpg", 
  "/images/Saint05.jpg", "/images/Saint06.jpg", "/images/Saint07.jpg", "/images/Saint08.jpg", 
  null,  "/images/Saint10.jpg", "/images/Saint11.jpg", "/images/Saint12.jpg", 
  "/images/Saint13.jpg", "/images/Saint14.jpg", "/images/Saint15.jpg", "/images/Saint16.jpg", 
  "/images/Saint18.jpg","/images/Saint19.jpg"
];

const videos = [
  null, null, null, null, null, null, null, null,
  "/images/Saint09.mp4"
];

function App() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [finalSlide, setFinalSlide] = useState(false); 
  const lastIndex = messages.length - 1;

  const handleStart = () => setStarted(true);
  const handleNext = () => setIndex((prev) => (prev + 1) % messages.length);
  const handleBack = () => setIndex((prev) => (prev - 1 + messages.length) % messages.length);

  const handleYesNo = (answer) => {
    // send email
    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, { answer }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => console.log('Email sent! ✅'))
      .catch(err => console.log(err));

    // show final slide with image and caption
    setFinalSlide(true);
  };

  if (!started) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, pink, purple)',
        color: 'white',
        flexDirection: 'column',
        padding: '2rem',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)', textAlign: 'center' }}>
          💌 A little surprise for you 💌
        </h1>
        <button 
          onClick={handleStart} 
          style={{
            padding: '1rem 2rem',
            fontSize: 'clamp(1rem, 4vw, 1.5rem)',
            borderRadius: '1.5rem',
            border: 'none',
            cursor: 'pointer',
            marginTop: '1.5rem',
            backgroundColor: 'white',
            color: 'pink',
            fontWeight: 'bold'
          }}
        >
          Click to Open
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      textAlign: 'center', 
      background: 'linear-gradient(to bottom, pink, purple)', 
      minHeight: '100vh', 
      color: 'white', 
      padding: '2rem',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Final slide */}
      {finalSlide ? (
        <MessageCard 
          image="/images/Saint19.jpg"
          messages={["I LOVE U 💖"]}
        />
      ) : (
        <MessageCard 
          image={images[index]} 
          video={videos[index]} 
          messages={[messages[index]]} 
        />
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        {!finalSlide && index > 0 && index < lastIndex && (
          <button
            onClick={handleBack}
            style={{
              padding: '0.8rem 1.5rem',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              borderRadius: '1rem',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: 'white',
              color: 'pink',
              fontWeight: 'bold'
            }}
          >
            Back 💌
          </button>
        )}

        {!finalSlide && index < lastIndex && (
          <button
            onClick={handleNext}
            style={{
              padding: '0.8rem 1.5rem',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              borderRadius: '1rem',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: 'white',
              color: 'pink',
              fontWeight: 'bold'
            }}
          >
            Next 💌
          </button>
        )}

        {!finalSlide && index === lastIndex && (
          <>
            <button
              onClick={() => handleYesNo('Yes')}
              style={{
                padding: '0.8rem 1.5rem',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                borderRadius: '1rem',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: 'green',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              Yes 💖
            </button>

            <button
              onClick={() => handleYesNo('No')}
              style={{
                padding: '0.8rem 1.5rem',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                borderRadius: '1rem',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: 'red',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              Yes 💖
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
