import { useState, useEffect, useRef } from 'react';

const words = ['Simplified DeFi', 'Structured Products', 'Vaults', 'Transparency', 'Yield', 'Earn', 'Stake']; // Add your array of words here

const AnimatedWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWord(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
        setShowWord(true);
      }, 1000); // Adjust the duration of the letter-out animation as needed
    }, 5000); // Adjust the duration between word changes as needed

    return () => clearInterval(interval);
  }, []);

  const rotateLetter = (letter: string, index: number) => {
    // const degrees = (index % 2 === 0 ? 1 : -1) * 360; // Rotate letters in alternate directions
  
    return (
      <span className='wordWrapper'>
        <span
          key={index}
          className={`inline-block transition-all duration-1000 ${
            showWord ? 'letter-in' : 'letter-out'
          }`}
        >
          {letter}
        </span>
      </span>
    );
  };

  return (
    <div className="text-5xl font-bold h-36 flex items-center">
      {words[currentWordIndex].split('').map((letter, index) =>
        rotateLetter(letter, index)
      )}
    </div>
  )
}

export default AnimatedWords
