import { motion } from "framer-motion";
import problemImg from "../../assets/images/problem.png";
import solutionImg from "../../assets/images/solution.png";

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
          Designed for a <span style={{color: "#2563eb"}} >Problem</span> <br />
          Every <span style={{color:"#2563eb"}}>Home</span> Faces
        </h2>
        <p>
          Water overflow isn’t a technical failure — it’s a human one.
          BMNP solves it mechanically, without changing how people live.
        </p>
      </motion.div>

      {/* Flow Line */}
      <div className="solution-line" />

      {/* Problem */}
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

          <ul className="solution-bullets">
            <li>
              <span className="bullet-icon error">✕</span> Water wastage
            </li>
            <li>
              <span className="bullet-icon error">✕</span> Electricity loss
            </li>
            <li>
              <span className="bullet-icon error">✕</span> Manual dependency
            </li>
          </ul>
        </div>

        <div className="solution-image" id="solutionimagefirst">
          <img src={problemImg} alt="Water Tank Overflow Problem" />
        </div>
      </motion.div>

      {/* Solution */}
      <motion.div
        className="solution-row right"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="solution-image">
          <img src={solutionImg} alt="BMNP Mechanical Solution" />
        </div>

        <div className="solution-text">
          <h3>The BMNP Approach</h3>
          <p>
            With our switch installed, bid farewell to manual monitoring and enjoy uninterrupted water supply.
            Our device intelligently detects when the tank is empty, activating the pump to refill it,
            and seamlessly shuts off when the tank reaches capacity.
          </p>

          <ul className="solution-bullets">
            <li>
              <span className="bullet-icon success">✓</span> Automatic Tank Refill & Auto Cut-Off
            </li>
            <li>
              <span className="bullet-icon success">✓</span> Patented Purely Mechanical Technology
            </li>
            <li>
              <span className="bullet-icon success">✓</span> Zero Electricity & Zero Maintenance
            </li>
          </ul>
        </div>
      </motion.div>

    </section>
  );
}
