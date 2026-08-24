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
          <span className="section-badge">BMNP Innovations Pvt. Ltd.</span>

          <h1>
            Purely Mechanical <br />
            <span className="accent">Water Tank Auto Cut-Off Switch</span>
          </h1>

          <p className="buy-desc">
            Say hello to convenience and efficiency. Our patented mechanical switch
            intelligently detects when the tank is empty — activating your pump to
            refill it — then seamlessly shuts off when the tank reaches full
            capacity. Zero electricity. Zero sensors. Zero effort.
          </p>

          <ul className="buy-features">
            <li>
              <span className="bullet-icon success">✓</span> 100% mechanical — patented technology
            </li>
            <li>
              <span className="bullet-icon success">✓</span> Auto-detects empty & full tank states
            </li>
            <li>
              <span className="bullet-icon success">✓</span> Activates pump & shuts off automatically
            </li>
            <li>
              <span className="bullet-icon success">✓</span> Works without electricity or sensors
            </li>
            <li>
              <span className="bullet-icon success">✓</span> Easy to install in Indian overhead tanks
            </li>
          </ul>

          {/* PRICE */}
          <div className="buy-price">
            <span>Price</span>
            <h2>₹299</h2>
          </div>

          {/* CTA */}
          <a
            className="buy-btn-wrap"
            href="https://shop.bmnp.in/shop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn primary buy-btn">Buy Now</button>
          </a>
        </div>

      </motion.div>
    </section>
  );
}
