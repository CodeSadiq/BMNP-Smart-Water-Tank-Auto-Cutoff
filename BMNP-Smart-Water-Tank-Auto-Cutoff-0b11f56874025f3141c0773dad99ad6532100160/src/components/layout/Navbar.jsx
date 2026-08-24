import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BMNPlogo from "../../assets/images/BMNPlogo1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-logo"><img src={BMNPlogo} /></div>

        {/* Desktop Links */}
        <div className="nav-links desktop">
          <a href="https://bmnp.in">Home</a>
          <a href="#solution">Solution</a>
          <a href="#product">Product</a>
          <a  href="#founders">Founders</a>
          <a href="#about">About</a>
          <a href="https://shop.bmnp.in/my-account/"   // 🔗 your external login URL
             target="_blank"
            rel="noopener noreferrer"
             className="login-btn" 
          >
             <LoginIcon  className="loginicon"/>
             <span>Login</span>
          </a>
          <a href="#contact" className="nav-cta">Contact</a>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <a  href="https://bmnp.in">Home</a>
            <a  href="#solution">Solution</a>
            <a  href="#product">Product</a>
            <a  href="#founders">Founders</a>
            <a  href="#about">About</a>
            <a
  href="https://shop.bmnp.in/my-account/"
  target="_blank"
  rel="noopener noreferrer"
  className="login-btn mobile"
>
  <LoginIcon />
  Login
</a>

            <a  href="#contact" className="cta">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


function LoginIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 17l5-5-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
