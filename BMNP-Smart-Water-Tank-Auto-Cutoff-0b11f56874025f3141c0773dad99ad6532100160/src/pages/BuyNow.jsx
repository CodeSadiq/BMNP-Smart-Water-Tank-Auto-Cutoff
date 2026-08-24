import { motion } from "framer-motion";
import productImg from "../assets/images/switch.png";

export default function BuyNow() {
  return (
    <section className="buy-page">

      <motion.div
        className="buy-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* LEFT – PRODUCT IMAGE */}
        <div className="buy-image">
          <img src={productImg} alt="BMNP Auto Cut-off System" />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="buy-content">
          <span className="section-badge">BMNP Product</span>

          <h1>
            Smart Mechanical <br />
            <span className="accent">Water Tank Auto Cut-Off</span>
          </h1>

          <p className="buy-desc">
            BMNP is a purely mechanical system that automatically switches
            off your water motor when the tank is full — no sensors, no
            electricity, no maintenance.
          </p>

          <ul className="buy-features">
            <li>100% mechanical – no electronics</li>
            <li>Prevents water overflow & wastage</li>
            <li>Easy to install in existing tanks</li>
            <li>Works without electricity</li>
            <li>Designed for Indian households</li>
          </ul>

          {/* PRICE */}
          <div className="buy-price">
            <span>Price</span>
            <h2>₹299</h2>
          </div>

          {/* CTA */}
          <a
            className="buy-btn" href="https://shop.bmnp.in/shop/"
          >
            <button className="btn primary" style={{backgroundColor:"green"}}>Buy Now</button>
          </a>
        </div>

      </motion.div>
    </section>
  );
}
