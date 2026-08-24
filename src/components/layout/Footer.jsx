import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Brand */}
        <div className="footer-brand">
          <h3>BMNP</h3>
          <p>
            Smart mechanical water tank auto cut-off solution
            designed for Indian homes.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="#solution">Solution</a>
          <a href="#product">Product</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="https://www.linkedin.com/in/codesadiq/">Developer</a>
          <a href="https://shop.bmnp.in/wp-login.php?redirect_to=https%3A%2F%2Fshop.bmnp.in%2F/">Admin Login</a>
        </div>

        {/* Social with Icons + Names */}
<div className="footer-social">
  <a href="mailto:bmnp.bmnp345@gmail.com" aria-label="Email">
    <MailIcon />
    <span>Email</span>
  </a>

  <a href="https://www.instagram.com/bmnp_innovations_pvt/" aria-label="Instagram">
    <InstagramIcon />
    <span>Instagram</span>
  </a>

  <a href="https://www.linkedin.com/company/bmnp-innovations-private-limited/" aria-label="LinkedIn">
    <LinkedInIcon />
    <span>LinkedIn</span>
  </a>
</div>

      </motion.div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BMNP. All rights reserved.
      </div>
    </footer>
  );
}

/* -------- SVG ICONS -------- */

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5"
        stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="4"
        stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2"
        stroke="currentColor" strokeWidth="1.6"/>
      <path
        d="M8 10v6M8 7v.01M12 16v-4a2 2 0 014 0v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

