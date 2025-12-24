import { motion } from "framer-motion";
import vivek from "../../assets/images/vivek.jpg";
import prince from "../../assets/images/prince.jpg";
import mohtashim from "../../assets/images/mohtashim.jpg";

const founders = [
  {
    name: "Vivek Kumar",
    role: "Founder & CEO",
    image: vivek,
    desc:
      "Visionary behind BMNP, leading innovation with a focus on quality, simplicity, and real-world impact."
  },
  {
    name: "Prince Kumar",
    role: "Co-Founder (Operations)",
    image: prince,
    desc:
      "Drives supply chain efficiency and operational excellence, ensuring reliability at every stage."
  },
  {
    name: "Mohtashim Alam",
    role: "Co-Founder (Finance)",
    image: mohtashim,
    desc:
      "Leads financial strategy with disciplined planning to ensure sustainable growth and stability."
  }
];

export default function Founders() {
  return (
    <section className="founders-section" id="founders">
      <motion.div
        className="founders-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>
          Leadership Behind <span>BMNP</span>
        </h2>
        <p>
          A team driven by purpose, simplicity, and sustainable innovation.
        </p>
      </motion.div>

      <div className="founders-grid">
        {founders.map((f, i) => (
          <motion.div
            key={i}
            className={`founder-card ${f.role.includes("CEO") ? "featured" : ""}`}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="founder-image">
              <img src={f.image} alt={f.name} />
            </div>

            <h3>{f.name}</h3>
            <span className="role">{f.role}</span>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
