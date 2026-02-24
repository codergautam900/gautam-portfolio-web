import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IntroAnimation = ({ onFinish }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    const greetings = useMemo(() => [
        "Hello",           // English
        "Hola",            // Spanish
        "Bonjour",         // French
        "Hallo",           // German
        "Ciao",            // Italian
        "Olá",             // Portuguese
        "नमस्ते",          // Hindi
        "你好",             // Chinese
        "こんにちは",      // Japanese
        "안녕하세요",       // Korean
        "مرحبا",           // Arabic
        "Привет",          // Russian
        "Hallo",           // Dutch
        "Γειά σου",        // Greek
        "Sawubona",        // Zulu
        "Kamusta",         // Tagalog
    ])

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 1000);
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                if (prev < greetings.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        if (onFinish) onFinish();
                    }, 100);
                    return prev;
                }
            });
        }, 300);

        return () => clearInterval(interval);
    }, [greetings.length, onFinish]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
                >
                    {greetings[currentIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default IntroAnimation
