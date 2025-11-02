"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "../../styles/treksCategories.css";

const categories = [
  {
    id: "summer",
    title: "Summer Treks",
    desc: "Cool mountain escapes, clear skies & blooming trails.",
    img: "/images/treks/summer.jpg",
  },
  {
    id: "winter",
    title: "Winter Treks",
    desc: "Snow-covered trails & crisp alpine air — a magical chill.",
    img: "/images/treks/winter.jpg",
  },
  {
    id: "monsoon",
    title: "Monsoon Treks",
    desc: "Misty forests, waterfalls & lush green valleys.",
    img: "/images/treks/monsoon.jpg",
  },
  {
    id: "one-day",
    title: "One-Day Treks",
    desc: "Quick escapes for spontaneous adventurers.",
    img: "/images/treks/oneday.jpg",
  },
  {
    id: "popular",
    title: "Most Popular Treks",
    desc: "Top-rated by trekkers — curated for unforgettable journeys.",
    img: "/images/treks/popular.jpg",
  },
  {
    id: "offbeat",
    title: "Offbeat Adventures",
    desc: "Hidden routes less travelled, for true explorers.",
    img: "/images/treks/offbeat.jpg",
  },
];

export default function TreksPage() {
  return (
    <div className="treks-page">
      {/* ======= HEADER SECTION ======= */}
      <motion.header
        className="treks-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Find Your Perfect Trek</h1>
        <p>
          Choose a season, mood, or adventure style — Trupik curates treks that
          match your spirit.
        </p>
      </motion.header>

      {/* ======= TREK CATEGORY GRID ======= */}
      <motion.div
        className="trek-categories-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            className="trek-card"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/treks/${cat.id}`}>
              <div className="trek-card-bg">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={400}
                  height={250}
                  className="trek-card-image"
                />
                <div className="overlay"></div>
                <div className="trek-card-content">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <span className="explore-btn">Explore →</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* ======= CALL TO ACTION ======= */}
      <motion.div
        className="cta-banner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Not sure where to start?</h2>
        <p>We’ll help you find the trek that fits your skill and schedule.</p>
        <Link href="/quiz" className="btn-primary">
          Take the Trek Finder Quiz
        </Link>
      </motion.div>
    </div>
  );
}
