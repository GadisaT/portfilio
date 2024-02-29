import React, { useState, useEffect } from 'react';

const Typewriter = ({ content, typeSpeed = 100, backSpeed = 100, backDelay = 1000, loop = true }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeWriter = () => {
      const textArray = content.split('');
      let typingInterval = setInterval(() => {
        if (isDeleting) {
          setCurrentText((prevText) => prevText.substring(0, prevText.length - 1));
          if (textArray.length === 0) {
            setIsDeleting(false);
            clearInterval(typingInterval);
            if (loop) {
              setTimeout(() => typeWriter(), backDelay);
            }
          }
        } else {
          setCurrentText(text => text + textArray.shift());
          if (textArray.length === 0) {
            setIsDeleting(true);
          }
        }
      }, typeSpeed);

      return typingInterval; // Return the interval from the function
    };

    const interval = typeWriter(); // Start the typing and store the interval

    // Wrap cleanup function logic in a function receiving the interval
    const cleanup = () => clearInterval(interval);

    // Return the cleanup function
    return cleanup;
  }, [content, typeSpeed, backSpeed, backDelay, loop, isDeleting]); // Dependencies updated

  return (
    <span className="typewriter-text">{currentText}</span>
  );
};

export default Typewriter;
