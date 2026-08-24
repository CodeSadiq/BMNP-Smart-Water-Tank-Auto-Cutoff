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
        <span className="hero-badge">About BMNP Innovations Pvt. Ltd.</span>
        <h2>
          Cutting-Edge Solutions for <br />
          <span className="accent">Efficient Water Management</span>
        </h2>
        <p>
          At BMNP Innovations Pvt. Ltd., we understand the critical importance
          of efficient water utilization in today's world — and we've built a
          game-changing solution to address it.
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
            At <span className="accent-soft">BMNP Innovations Pvt. Ltd.</span>, we are a team of driven innovators committed to solving the critical challenge of efficient water utilization. We develop <span className="accent">cutting-edge mechanical solutions</span> that address the everyday challenges faced in water management across Indian homes and beyond.
          </p>

          <p>
            Our flagship product — the <span className="accent-soft">BMNP Purely Mechanical Switch</span> — is a game-changer in the industry. This innovative switch automatically toggles water flow on and off, optimizing consumption and minimizing wastage. With its <span className="accent">patented technology</span>, our switch ensures precise control and reliability, empowering users to conserve water without compromising on convenience.
          </p>

          <h3>
            Our <span className="accent">Mission</span>
          </h3>

          <p>
            To provide reliable, affordable, and <span className="accent-soft">electricity-free water management solutions</span> that empower every household to conserve water effortlessly — without disrupting daily life.
          </p>

          <h3>
            Our <span className="accent">Vision</span>
          </h3>

          <p>
            To become India's most trusted name in smart water conservation — making <span className="accent-soft">sustainable and automated water management</span> accessible to every home through purely mechanical innovation.
          </p>
        </div>

      </div>
    </section>
  );
}
