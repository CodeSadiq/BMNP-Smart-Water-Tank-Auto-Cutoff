import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Add as many images as you want here
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";

export default function About() {
  const images = [about1, about2, about3];
  const [current, setCurrent] = useState(0);

  // Auto change image every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="about-section">

      {/* Intro */}
      <div className="about-intro">
        <span className="hero-badge">About BMNP</span>
        <h2>
          Built with a <span className="accent">Simple Idea</span>, <br />
          Solving a <span className="accent">Daily Problem</span>
        </h2>
        <p>
          BMNP was created to stop water wastage using a reliable
          mechanical approach — without electronics or sensors.
        </p>
      </div>

      {/* Layout */}
      <div className="about-layout">

        {/* Auto Image Area */}
        <div className="about-image-wrapper">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt="BMNP System"
              className="about-image"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Text */}
        <div className="about-text">
          <h3>
  Who We <span className="accent">Are</span>
</h3>

<p>
  We are a team of <span className="accent-soft">young innovators</span> committed
  to solving everyday water management problems in Indian homes. Our goal is to
  simplify how people control water tank motors—saving time, energy, and
  resources.
</p>

<p>
  BMNP began with a simple observation. We saw how often people forgot to turn
  off their water motors—leading to overflowing tanks, rising electricity
  bills, and precious water being wasted. That moment sparked an idea to build a
  system that solves all of it—<span className="accent">automatically</span>.
</p>

<h3>
  Our <span className="accent">Mission</span>
</h3>

<p>
  To eliminate water wastage and manual effort through a smart, purely mechanical
  solution that is <span className="accent-soft">affordable, reliable, and easy
  to install</span>.
</p>

<h3>
  Our <span className="accent">Vision</span>
</h3>

<p>
  To make smart and sustainable water management accessible to every Indian
  home—through <span className="accent-soft">simple, electricity-free
  automation</span>.
</p>

        </div>

      </div>
    </section>
  );
}
