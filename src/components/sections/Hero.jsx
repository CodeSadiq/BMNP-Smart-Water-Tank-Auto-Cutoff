import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      {/* subtle overlay for readability */}
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Smart Mechanical Water Solution
        </motion.span>

        {/* Heading */}
        <h1>
          Stop Water Overflow <br />
          <span>Automatically.</span>
        </h1>

        {/* Description */}
        <p>
          BMNP is a smart mechanical auto cut-off system that switches off your
          water motor when the tank is full — no sensors, no electricity, no
          maintenance.
        </p>

        {/* Actions */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="#product" className="btn primary">
            Explore Our Product
          </a>

          <Link to="/buy" className="btn outline">
            Buy Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
