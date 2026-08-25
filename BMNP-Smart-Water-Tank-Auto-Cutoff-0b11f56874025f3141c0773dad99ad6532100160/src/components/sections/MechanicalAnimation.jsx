import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import switch1 from "../../assets/images/switch.png";
import switch2 from "../../assets/images/switch2.png";
import switch3 from "../../assets/images/switch3.png";
import switch4 from "../../assets/images/switchImage02.png";
import switch5 from "../../assets/images/switchImage3.png";

const frames = [
  {
    src: switch1,
    title: "01. Side Profile",
    tag: "Dual-Lever Action",
    desc: "Precision balanced mechanical arms that trigger instant valve shutoff upon tank full level."
  },
  {
    src: switch2,
    title: "02. Isometric Angle",
    tag: "Watertight Mount",
    desc: "Heavy-duty threaded collar engineered for effortless installation into standard overhead tanks."
  },
  {
    src: switch3,
    title: "03. Actuator View",
    tag: "Zero Power Needed",
    desc: "Pure buoyancy-driven mechanism functioning flawlessly without sensors or electricity."
  },
  {
    src: switch4,
    title: "04. Perspective View",
    tag: "Rust-Proof Polymer",
    desc: "Weatherproof UV-stabilized polymer housing built for extreme weather durability."
  },
  {
    src: switch5,
    title: "05. Exploded Assembly",
    tag: "Precision Hardware",
    desc: "Stainless steel locking pin and safety release mechanism shown with component breakdown."
  }
];

export default function MechanicalAnimation() {
  const [useVideo, setUseVideo] = useState(true);
  const [videoSrc, setVideoSrc] = useState("/switch.mp4");
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1600); // ms per frame
  const videoRef = useRef(null);

  // Fallback check if video fails to load
  const handleVideoError = () => {
    setUseVideo(false);
  };

  // Frame animation loop if not using video
  useEffect(() => {
    if (useVideo || !isPlaying) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, speed);

    return () => clearInterval(timer);
  }, [useVideo, isPlaying, speed]);

  const togglePlay = () => {
    if (useVideo && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const currentFrame = frames[index];

  return (
    <div className="cad-animation-container">
      {/* Top Header Badge */}
      <div className="cad-header-badge">
        <span className="live-dot" />
        <span className="cad-badge-text">
          {useVideo ? "3D Mechanical Animation Video" : "360° CAD Mechanical Animation"}
        </span>
        {!useVideo && (
          <span className="cad-frame-count">Angle {index + 1} / {frames.length}</span>
        )}
      </div>

      {/* Main Screen */}
      <div 
        className="cad-screen"
        onClick={togglePlay}
        title="Click to Play / Pause"
      >
        {useVideo ? (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            onError={handleVideoError}
            className="cad-video"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        ) : (
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={currentFrame.src}
              alt={currentFrame.title}
              className="cad-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        )}

        {/* Floating Tag */}
        {!useVideo && (
          <motion.div 
            key={`tag-${index}`}
            className="cad-floating-tag"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="tag-pill">{currentFrame.tag}</span>
            <h4>{currentFrame.title}</h4>
          </motion.div>
        )}

        {/* Pause Overlay Indicator */}
        {!isPlaying && (
          <div className="cad-pause-overlay">
            <div className="pause-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span>Click to Resume Animation</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="cad-desc">
        {useVideo
          ? "Purely mechanical auto cut-off animation showing real-time water tank trigger and motor shutdown operation."
          : currentFrame.desc}
      </p>

      {/* Progress Bar */}
      {!useVideo && (
        <div className="cad-progress-bar-bg">
          <motion.div 
            className="cad-progress-bar-fill"
            animate={{ width: `${((index + 1) / frames.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* Controls Bar */}
      <div className="cad-controls">
        <button 
          className="cad-control-btn play-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
          <span>{isPlaying ? "Pause" : "Play"}</span>
        </button>

        {!useVideo && (
          <>
            <button 
              className="cad-control-btn"
              onClick={() => setIndex((prev) => (prev - 1 + frames.length) % frames.length)}
            >
              ◄ Prev
            </button>

            <button 
              className="cad-control-btn"
              onClick={() => setIndex((prev) => (prev + 1) % frames.length)}
            >
              Next ►
            </button>

            <button 
              className="cad-control-btn speed-btn"
              onClick={() => setSpeed((prev) => (prev === 1600 ? 900 : 1600))}
            >
              {speed === 900 ? "2x Speed" : "1x Speed"}
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Selector Strip (for picture sequence) */}
      {!useVideo && (
        <div className="cad-thumbnails">
          {frames.map((frame, i) => (
            <button
              key={i}
              className={`cad-thumb-btn ${index === i ? "active" : ""}`}
              onClick={() => {
                setIndex(i);
                setIsPlaying(false);
              }}
              title={frame.title}
            >
              <img src={frame.src} alt={`Thumbnail ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
