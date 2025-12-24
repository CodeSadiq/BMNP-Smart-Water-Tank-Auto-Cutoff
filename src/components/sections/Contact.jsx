import { motion } from "framer-motion";
function WhatsappIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2a10 10 0 00-8.66 15l-1.34 5 5.14-1.35A10 10 0 1012 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        transition="0.3s"
      />
      <path
        d="M9.5 8.8c.2-.4.4-.4.6-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.4.6c-.1.2-.1.4 0 .6.4.7 1.1 1.4 1.9 1.8.2.1.4.1.6 0l.7-.4c.2-.1.4-.1.6 0l1.7.8c.3.1.4.3.4.5v.5c0 .2 0 .4-.3.6-.4.4-1.1.7-1.8.7-1.2 0-2.8-.7-4.1-2s-2-2.9-2-4.1c0-.7.3-1.4.7-1.8z"
        fill="currentColor"
        transition="0.3s"
      />
    </svg>
  );
}


export default function Contact() {
  return (
    <section id="contact" className="contact-alt">

      <motion.div
        className="contact-alt-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Intro */}
        <div className="contact-alt-text">
          <span className="hero-badge">Get in Touch</span>

          <h2>
            Let’s <span className="accent">Connect</span> & <br />
            Build Something <span className="accent">Useful</span>
          </h2>

          <p>
            Have a question, collaboration idea, or want to know more about
            BMNP? Choose how you’d like to connect with us.
          </p>
        </div>

        {/* Horizontal Cards */}
        <div className="contact-horizontal">

          <ContactCard
             title="Quick Chat"
             desc="Talk to us instantly on WhatsApp"
             link="https://wa.me/918340312824"
             icon={<WhatsappIcon />}
          />

          <ContactCard
            title="Follow Updates"
            desc="See our journey & progress"
            link="https://www.instagram.com/bmnp_innovations_pvt/?igsh=ZGdnaGhiNDU1ZnIz"
            icon={<InstagramIcon />}
          />

          <ContactCard
            title="Professional Connect"
            desc="Let’s network on LinkedIn"
            link="https://www.linkedin.com/company/bmnp-innovations-private-limited/"
            icon={<LinkedInIcon />}
          />

        </div>
      </motion.div>
    </section>
  );
}

/* ---------- CARD ---------- */

function ContactCard({ title, desc, link, icon }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card-horizontal"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="contact-card-icon">{icon}</div>

      <div className="contact-card-text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      <span className="contact-arrow">→</span>
    </motion.a>
  );
}

/* ---------- SVG ICONS ---------- */

function MailIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16v12H4z" stroke="#2563eb" strokeWidth="1.6" />
      <path d="M4 6l8 7 8-7" stroke="#2563eb" strokeWidth="1.6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="#2563eb" strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="4" stroke="#2563eb" strokeWidth="1.6"/>
      <circle cx="17.5" cy="6.5" r="1" fill="#2563eb"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#2563eb" strokeWidth="1.6"/>
      <path d="M8 10v6M8 7v.01M12 16v-4a2 2 0 014 0v4"
        stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

