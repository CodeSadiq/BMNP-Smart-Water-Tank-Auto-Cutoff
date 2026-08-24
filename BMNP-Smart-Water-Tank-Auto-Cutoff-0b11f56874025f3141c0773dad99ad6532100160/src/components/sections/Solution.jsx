import { motion } from "framer-motion";
import problemImg from "../../assets/images/problem.png";

export default function Solution() {
  return (
    <section id="solution" className="solution-flow">

      {/* Intro */}
      <motion.div
        className="solution-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="hero-badge">Our Solution</span>
        <h2>
          Designed for a <span style={{ color: "#2563eb" }}>Problem</span> <br />
          Every <span style={{ color: "#2563eb" }}>Home</span> Faces
        </h2>
        <p>
          Water overflow isn’t a technical failure — it’s a human one.
          BMNP solves it mechanically, without changing how people live.
        </p>
      </motion.div>

      {/* Problem Row */}
      <motion.div
        className="solution-row left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="solution-text">
          <h3>The Everyday Problem</h3>
          <p>
            Motors are switched on manually. When forgotten, tanks overflow.
            This wastes water, electricity, and peace of mind — daily.
          </p>

          <ul>
            <li>Water wastage</li>
            <li>Electricity loss</li>
            <li>Manual dependency</li>
          </ul>
        </div>

        <div className="solution-image" id="solutionimagefirst">
          <img src={problemImg} alt="Water Tank Overflow Problem" />
        </div>
      </motion.div>

      {/* Solution Section (Full Width Video) */}
      <motion.div
        className="solution-full-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="solution-text-centered">
          <h3>The BMNP Approach</h3>
          <p>
            BMNP introduces a purely mechanical auto cut-off system that turns
            off the motor automatically when the tank is full.
          </p>

          <ul className="solution-features-inline">
            <li>No sensors</li>
            <li>No electricity</li>
            <li>No maintenance</li>
          </ul>
        </div>

        {/* Full-width Video */}
        <div className="solution-video-full-wrapper">
          <div className="video-ambient-glow" />
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="solution-full-video"
          />
          <div className="solution-video-overlay-badge bottom-left">
            <span className="live-dot" />
            <span>3D Auto Cut-Off Mechanism</span>
          </div>
          <div className="solution-video-overlay-badge top-right">
            <span>⚡ Zero Electricity</span>
          </div>
          <div className="solution-video-overlay-badge bottom-right">
            <span>💧 Pure Mechanical Precision</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
