import { useEffect, useState } from "react";

import WhatsappLogo from "../../assets/images/whatsapp.png";
import InstaLogo from "../../assets/images/Instagram.png";
import LinkedinLogo from "../../assets/images/Linkedin.png";

export default function FloatingSocial() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleExpand = (e) => {
    // Only toggle expansion on touch devices or direct trigger if closed
    if (!expanded) {
      setExpanded(true);
    }
  };

  return (
    <div
      className={`floating-social ${visible ? "show" : ""} ${
        expanded ? "expanded" : ""
      }`}
      onMouseLeave={() => setExpanded(false)}
    >
      <div
        className="social-icons"
        onClick={() => setExpanded(!expanded)}
      >
        {/* WhatsApp (PRIMARY – ALWAYS VISIBLE) */}
        <a
          href="https://wa.me/917634075521"
          target="_blank"
          rel="noopener noreferrer"
          className="icon whatsapp primary"
          aria-label="WhatsApp"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={WhatsappLogo} alt="WhatsApp" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/bmnp_innovations_pvt"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram secondary"
          aria-label="Instagram"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={InstaLogo} alt="Instagram" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/bmnp-innovations-private-limited/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin secondary"
          aria-label="LinkedIn"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={LinkedinLogo} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}
