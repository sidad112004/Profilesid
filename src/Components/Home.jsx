import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const words = [
    { text: "coder.", color: "text-red-500" },
    { text: "developer.", color: "text-sky-500" },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex].text;
    let timeout;

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 500);
    } else {
      timeout = setTimeout(() => {
        const updatedText = isDeleting
          ? currentWord.substring(0, displayedText.length - 1)
          : currentWord.substring(0, displayedText.length + 1);
        setDisplayedText(updatedText);
      }, isDeleting ? 100 : 150);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <span className={`${words[currentWordIndex].color} font-bold`}>
      {displayedText}
    </span>
  );
};

function Home() {
  return (
    <div>
      {/* Add some Tailwind transition classes for a smooth entrance */}
      <div className="hero mt-36 bg-base-100 transition-all duration-1000">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://res.cloudinary.com/dm13wazfl/image/upload/v1718046354/tetyg4bmxskei7pmfxc8.jpg"
            alt="Profile"
            className="w-80 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Siddesh Dhanlobhe</h1>
            {/* The dynamic typewriter text is shown just below the name */}
            <h2 className="text-2xl mt-2">
              I am <Typewriter />
            </h2>
            <p className="py-6">
              Engineering Student at Government College of Engineering, Karad, Information Technology Branch | FULL Stack Developer | Aspiring Software Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
    