import { useState, useEffect } from 'react';

const TypingEffect = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const textArray = ["Frontend Developer", "Backend Enthusiast", "Cloud DevOps Enthusiast", "Mechanical Design Engineer"];
    const typingSpeed = 100; // Speed of typing
    const deletingSpeed = 50; // Speed of deleting
    const pauseTime = 2000; // Pause time before switching to the next word

    useEffect(() => {
        const handleTyping = () => {
            const currentText = textArray[index];
            if (!isDeleting) {
                // Typing effect
                setText(currentText.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                if (charIndex + 1 === currentText.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime); // Pause before deleting
                }
            } else {
                // Deleting effect
                setText(currentText.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % textArray.length); // Move to the next word
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, index, textArray]);

    return <div className="typing-effect"> {text}<span className="cursor">|</span></div>;
};

export default TypingEffect;