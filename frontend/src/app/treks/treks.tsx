"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "../../styles/treksCategories.css";

export default function TreksPage() {
  const categories = [
    {
      title: "Summer Treks",
      description:
        "Breathe in crisp mountain air on lush green trails perfect for warm weather explorations.",
      image: "/images/summer_trek.jpg",
      slug: "summer",
    },
    {
      title: "Winter Treks",
      description:
        "Snow-covered peaks and frozen lakes await in India’s top winter trekking routes.",
      image: "/images/winter_trek.jpg",
      slug: "winter",
    },
    {
      title: "Monsoon Treks",
      description:
        "Watch waterfalls come alive and valleys bloom — a photographer’s dream season.",
      image: "/images/monsoon_trek.jpg",
      slug: "monsoon",
    },
    {
      title: "One-Day Treks",
      description:
        "Perfect weekend escapes for beginners or those short on time but big on adventure.",
      image: "/images/oneday_trek.jpg",
      slug: "one-day",
    },
    {
      title: "Most Popular Treks",
      description:
        "Handpicked routes loved by thousands of Trupik explorers for their beauty and challenge.",
      image: "/images/popular_trek.jpg",
      slug: "popular",
    },
  ];

  return (
    <section className="treks-page">
      <div className="container">
        <motion.header
          className="treks-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Explore Treks Across India</h1>
          <p>
            Find your perfect trek — tailored to your season, skill level, and
            curiosity. Start exploring the categories below.
          </p>
        </motion.header>

        <div className="trek-category-grid">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.slug}
              className="trek-card-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/treks/${cat.slug}`} className="trek-card">
                <div className="trek-image-wrap">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={400}
                    height={260}
                    className="trek-image"
                  />
                  <div className="image-overlay">
                    <span className="overlay-text">View Treks</span>
                  </div>
                </div>
                <div className="trek-info">
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
