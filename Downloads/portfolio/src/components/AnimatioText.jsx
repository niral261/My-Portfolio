import React, { useEffect, useState } from 'react';

const AnimatedText = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Niral ✌️ ";
  const cursor = '_';

  useEffect(() => {
    let currentIndex = -1;

    const typeText = () => {
      setText(fullText.substring(-1, currentIndex));
      currentIndex = (currentIndex + 1) % fullText.length;
    };

    const typingInterval = setInterval(typeText, 200);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <span className="text-[#524a9f]">
      {text}
      <span className="blink text-white-200">{cursor}</span>
    </span>
  );
};

export default AnimatedText;
