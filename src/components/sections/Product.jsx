import { useState } from "react";
import { motion } from "framer-motion";

// Import multiple switch images
import switch1 from "../../assets/images/switch.png";
import switch2 from "../../assets/images/switch2.png";
import switch3 from "../../assets/images/switch3.png";

export default function Product() {
  const switches = [switch1, switch2, switch3];
  const [activeSwitch, setActiveSwitch] = useState(0);

  return (
    <section id="product" className="product-section">

      {/* Intro */}
      <motion.div
        className="product-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="hero-badge">Product Features</span>

        <h2>
          Built <span className="accent">Simple</span>. Built to{" "}
          <span className="accent">Last</span>.
        </h2>

        <p>
          BMNP focuses on <span className="accent-soft">mechanical reliability</span>,
          removing unnecessary complexity while solving a real household problem.
        </p>
      </motion.div>

      {/* Layout */}
      <div className="product-layout">

        {/* Switch Image Area */}
        <motion.div
          className="product-visual"
          key={activeSwitch}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img src={switches[activeSwitch]} alt="BMNP Switch" />

          {/* Switch Buttons */}
          <div className="switch-controls">
            {switches.map((_, index) => (
              <button
                key={index}
                className={`switch-btn ${
                  activeSwitch === index ? "active" : ""
                }`}
                onClick={() => setActiveSwitch(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <span className="visual-label">
            Purely Mechanical Auto Cut-Off Switch
          </span>
        </motion.div>

        {/* Feature Cards */}
        <div className="product-grid">
          <Feature title="Purely Mechanical" desc="No electronics, no sensors." />
          <Feature title="No Electricity" desc="Consumes zero power." />
          <Feature title="Automatic Cut-Off" desc="Stops motor instantly." />
          <Feature title="Low Maintenance" desc="One-time installation." />
          <Feature title="Water Saving" desc="Prevents daily overflow." />
          <Feature title="Indian Homes Ready" desc="Designed for overhead tanks." />
        </div>

      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}
