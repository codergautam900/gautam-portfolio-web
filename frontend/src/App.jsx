import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Testimonial from './pages/Testimonial'
import Footer from './pages/Footer'
import Skills from './pages/Skills'
import CustomCursor from './components/CustomCursor'
import IntroAnimation from './components/IntroAnimation'


const App = () => {
    const [introDone, setIntroDone] = useState(false);

    return (
        <>
            {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
            {introDone && (
                <div className='relative gradient text-white'>
                    <CustomCursor />
                    <Navbar />
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Testimonial />
                    <Contact />
                    <Footer />
                </div>
            )}
        </>
    )
}

export default App