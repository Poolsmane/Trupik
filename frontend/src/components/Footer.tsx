// frontend/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner container">
        {/* ==== Brand + Social ==== */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo-wrap">
            <Image
              src="/icons/logo.png"
              alt="Trupik logo"
              width={48}
              height={48}
              className="footer-logo"
              priority
            />
            <span className="footer-brand-name">Trupik</span>
          </Link>
          <p className="footer-tagline">
            Discover, book & host unforgettable treks.
          </p>

          <div className="social-row" aria-label="Trupik social links">
            <Link
              href="https://instagram.com/trupik"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://linkedin.com/company/trupik"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://github.com/trupik"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Image
                src="/icons/github.png"
                alt="GitHub"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* ==== Quick Links ==== */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/treks">Explore Treks</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>

        {/* ==== Contact ==== */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <strong>Office:</strong> Trupik Technologies Pvt. Ltd.,
            <br />
            4th Floor, Adventure Tower, MG Road, Bangalore — 560001
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919876543210">+91 98765 43210</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@trupik.com">hello@trupik.com</a>
          </p>
        </div>
      </div>

      {/* ==== Footer Bottom ==== */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Trupik. All rights reserved.{" "}
            <Link href="/terms">Terms</Link> •{" "}
            <Link href="/privacy">Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
