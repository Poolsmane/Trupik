"use client";

import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import "../styles/hero.css";
import "../styles/layout.css";
import "../styles/treks.css";

export default function HomePage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="hero"
        role="banner"
        aria-label="Trupik hero"
        style={{
          background: `linear-gradient(rgba(243, 237, 237, 0.45), rgba(0, 0, 0, 0.45)), 
                      url('/images/hero.png') center/cover no-repeat`,
        }}
      >
        <div className="hero-overlay">
          <div className="container hero-inner">
            {/* ===== Left Side ===== */}
            <div className="hero-left">
              <h1>
                Adventure Starts with <span className="highlight">Trupik</span>
              </h1>
              <p className="lead">
                Explore breathtaking trails, discover hidden gems, and connect
                with trusted trek providers across India.
              </p>
              <p className="hero-cta">
                <Link
                  href="/treks"
                  className="btn-primary"
                  aria-label="Explore Treks on Trupik"
                >
                  Explore Treks
                </Link>
              </p>
              <ul className="hero-features">
                <li>Verified local providers</li>
                <li>Instant booking & secure payments</li>
                <li>Curated treks for every season & skill level</li>
              </ul>
            </div>

            {/* ===== Right Side ===== */}
            <div className="hero-right">
              <div className="hero-image-wrap">
                <Image
                  src="/images/hero_small.png"
                  alt="Trekkers ascending misty ridge"
                  width={400}
                  height={400}
                  className="hero-small"
                  priority
                />
                <p className="hero-quote">
                  “Where footprints fade, memories begin.
                  <br />
                  <strong>Trupik</strong> — for those who wander with purpose.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY TREKS REJUVENATE ================= */}
      <section id="rejuvenate" className="content-block">
        <div className="container">
          <h2>Why Trekking Rejuvenates You</h2>
          <div className="split">
            <div className="split-text">
              <p>
                <strong>Disconnect to reconnect.</strong> Modern life is noisy —
                trekking gives your brain the reset it needs. Studies show
                nature exposure reduces stress hormones, improves mood, increases
                creativity, and helps with better sleep. Trupik-curated treks are
                designed to balance exertion and rest so you come back stronger —
                physically and mentally.
              </p>

              <h3>Health benefits at a glance</h3>
              <ul className="checklist">
                <li>Cardio & endurance improvements</li>
                <li>Lower stress and improved mental health</li>
                <li>Better sleep & immune support</li>
                <li>Improved balance and core strength</li>
              </ul>
            </div>

            <div className="split-media">
              <Image
                src="/images/rejuvenate.png"
                alt="Person meditating on a trail"
                width={480}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CULTURAL & HISTORICAL CONTEXT ================= */}
      <section id="history" className="content-block muted">
        <div className="container">
          <h2>Treks — a doorway to culture & history</h2>
          <p>
            Many trails are ancient paths used by local communities, traders, and
            pilgrims. Trekking is more than exercise — it’s a cultural journey.
            Trupik partners with local providers who respect traditions and share
            the history behind each route, helping you experience landscapes the
            way locals do.
          </p>

          <div className="history-grid">
            <div className="history-item">
              <Image
                src="/icons/heritage.png"
                alt="heritage icon"
                width={60}
                height={60}
              />
              <h4>Living Traditions</h4>
              <p>
                Meet communities and learn time-honoured practices along the
                trail.
              </p>
            </div>

            <div className="history-item">
              <Image
                src="/icons/conservation.png"
                alt="conservation icon"
                width={60}
                height={60}
              />
              <h4>Conservation-focused</h4>
              <p>
                We promote low-impact travel and work with providers who protect
                fragile ecosystems.
              </p>
            </div>

            <div className="history-item">
              <Image
                src="/icons/guides.png"
                alt="local guides icon"
                width={60}
                height={60}
              />
              <h4>Local Guides</h4>
              <p>
                Guides share oral histories, route lore, and safe practices —
                enriching the trek experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS & HOW IT WORKS ================= */}
      <section id="benefits" className="content-block">
        <div className="container">
          <h2>How Trupik Helps You (Fast & Reliable)</h2>
          <div className="three-grid">
            <div className="card">
              <Image
                src="/icons/verified.png"
                alt="verified icon"
                width={50}
                height={50}
              />
              <h3>Verified Providers</h3>
              <p>
                Providers are background-checked and reviewed. We show ratings,
                recent bookings, and credentials.
              </p>
            </div>

            <div className="card">
              <Image
                src="/icons/booking.png"
                alt="booking icon"
                width={50}
                height={50}
              />
              <h3>Instant Booking</h3>
              <p>
                Book in seconds with secure payment—no manual confirmations for
                listed slots.
              </p>
            </div>

            <div className="card">
              <Image
                src="/icons/support.png"
                alt="support icon"
                width={50}
                height={50}
              />
              <h3>On-Trip Support</h3>
              <p>
                24/7 support & emergency protocols managed through provider
                partnerships and our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section id="social-proof" className="content-block muted">
        <div className="container">
          <h2>Trusted By Trekkers</h2>
          <div className="testimonials">
            <blockquote>
              <p>
                "Trupik made our first high-altitude trek safe and unforgettable.
                The guide knew the route and the community—highly recommend."
              </p>
              <cite>— Aditi, Bangalore</cite>
            </blockquote>

            <blockquote>
              <p>
                "Smooth booking, quick support and excellent logistics. The
                photographs from the trip still give me chills."
              </p>
              <cite>— Rohan, Pune</cite>
            </blockquote>
          </div>

          <div className="small-stats">
            <div>
              <strong>1,200+</strong>
              <span> Treks Booked</span>
            </div>
            <div>
              <strong>350+</strong>
              <span> Verified Providers</span>
            </div>
            <div>
              <strong>4.8</strong>
              <span> Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section id="faq" className="content-block">
        <div className="container">
          <h2>Quick Questions</h2>
          <div className="faq-grid">
            <div>
              <h4>Do I need experience?</h4>
              <p>
                No — we list treks by difficulty. Choose 'Easy' or 'Short Treks'
                for first-timers.
              </p>
            </div>
            <div>
              <h4>How do payments work?</h4>
              <p>
                Secure payments through the platform. Providers receive payouts
                after the trek as per terms.
              </p>
            </div>
            <div>
              <h4>What about safety?</h4>
              <p>
                Providers follow safety checklists. We surface credentials and
                real user reviews so you can decide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
