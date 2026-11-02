"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function BookDetailPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "description",
  );
  const [quantity, setQuantity] = useState(1);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <main className={styles.bookDetailPage}>
      {/* Back Button */}
      <div className={styles.backButton}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </div>

      {/* Top Banner */}
      <div className={styles.topBanner}>
        <p>Free standard shipping on all orders</p>
      </div>

      {/* Main Book Section */}
      <div className={styles.bookMainSection}>
        {/* Book Cover */}
        <div className={styles.bookCoverColumn}>
          <div className={styles.saveBadge}>SAVE £7.80</div>
          <div className={styles.bookCover}>
            <Image
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&auto=format&fit=crop"
              alt="The Future of Modular Architecture"
              className={styles.coverImage}
              fill
              sizes="(max-width: 768px) 240px, 280px"
            />
          </div>
        </div>

        {/* Book Info */}
        <div className={styles.bookInfoColumn}>
          <p className={styles.edition}>1st Edition</p>
          <h1 className={styles.bookTitle}>
            The Future of Modular Architecture
          </h1>
          <p className={styles.author}>By David Wallance</p>
          <p className={styles.copyright}>Copyright 2021</p>

          {/* Format Tabs */}
          <div className={styles.formatTabs}>
            <button className={`${styles.formatTab} ${styles.active}`}>
              Paperback
              <br />
              <span className={styles.price}>£31.19</span>
            </button>
            <button className={styles.formatTab}>
              Hardback
              <br />
              <span className={styles.price}>£137.59</span>
            </button>
            <button className={styles.formatTab}>
              eBook
              <br />
              <span className={styles.price}>£31.19</span>
            </button>
          </div>
        </div>

        {/* Purchase Column */}
        <div className={styles.purchaseColumn}>
          <div className={styles.purchaseBox}>
            <div className={styles.isbnInfo}>
              <p>ISBN 9780367467227</p>
              <p>302 Pages 130 Color Illustrations</p>
              <p>Published April 8, 2021 by Routledge</p>
            </div>

            <a href="#" className={styles.inspectionLink}>
              Request Inspection Copy
            </a>

            <div className={styles.shippingInfo}>
              <p>🇧🇩 Free Shipping (8-10 Business Days)</p>
              <a href="#" className={styles.shippingPolicy}>
                Shipping Policy
              </a>
            </div>
          </div>

          <div className={styles.cartBox}>
            <h3 className={styles.cartTitle}>Paperback</h3>
            <div className={styles.priceRow}>
              <span className={styles.originalPrice}>£38.99</span>
              <span className={styles.salePrice}>GBP £31.19</span>
            </div>
            <div className={styles.quantityRow}>
              <div className={styles.quantityControl}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  −
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            <button className={styles.addToCartBtn}>🛒 ADD TO CART</button>
            <button className={styles.wishListBtn}>ADD TO WISH LIST</button>
          </div>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className={styles.accordionSection}>
        {/* Description */}
        <div className={styles.accordionItem}>
          <button
            className={styles.accordionHeader}
            onClick={() => toggleSection("description")}
          >
            <span>Description</span>
            <span
              className={`${styles.chevron} ${expandedSection === "description" ? styles.open : ""}`}
            ></span>
          </button>
          {expandedSection === "description" && (
            <div className={styles.accordionContent}>
              <p>
                <em>The Future of Modular Architecture</em> presents an
                unprecedented proposal for mass-customized mid- and high-rise
                modular housing that can be manufactured and distributed on a
                global scale. Advocating for the adoption of open-source design
                based on a new modular standard, the book shows how the
                construction industry and architectural practice may soon be
                radically reshaped. By leveraging the existing intermodal
                freight transportation system&apos;s dimensional standards, the
                book demonstrates how meaningful economies of scale can be
                achieved in modular housing production.
              </p>
              <p>
                The book&apos;s thesis springs from the idea that adopting the
                dimensional standards of the existing intermodal freight
                transportation system is the key to achieving meaningful
                economies of scale. David shows how global supply chains can be
                harnessed to realize the long-held promise that housing will be
                a well-designed and affordable industrial product.
              </p>
            </div>
          )}
        </div>

        {/* Table of Contents */}
        <div className={styles.accordionItem}>
          <button
            className={styles.accordionHeader}
            onClick={() => toggleSection("toc")}
          >
            <span>Table of Contents</span>
            <span
              className={`${styles.chevron} ${expandedSection === "toc" ? styles.open : ""}`}
            >
              ∨
            </span>
          </button>
          {expandedSection === "toc" && (
            <div className={styles.accordionContent}>
              <ol className={styles.tocList}>
                <li>Introduction: The Case for Modular Architecture</li>
                <li>The Intermodal Standard and Its Implications</li>
                <li>Open-Source Design for Mass Customization</li>
                <li>Global Supply Chains and Housing Production</li>
                <li>Urbanism and the Modular City</li>
                <li>Sustainable Development and Equitable Urbanism</li>
                <li>
                  The Future Enterprise: Design, Manufacturing, Construction
                </li>
                <li>Conclusion: A New Paradigm</li>
              </ol>
            </div>
          )}
        </div>

        {/* Author(s) */}
        <div className={styles.accordionItem}>
          <button
            className={styles.accordionHeader}
            onClick={() => toggleSection("author")}
          >
            <span>Author(s)</span>
            <span
              className={`${styles.chevron} ${expandedSection === "author" ? styles.open : ""}`}
            ></span>
          </button>
          {expandedSection === "author" && (
            <div className={styles.accordionContent}>
              <p>
                <strong>David Wallance</strong> is an architect and researcher
                based in New York. With decades of experience working with
                large, award-winning firms, he brings a unique perspective to
                modular architecture and sustainable urban development. His
                research-based approach has influenced housing policy and
                architectural practice worldwide.
              </p>
            </div>
          )}
        </div>

        {/* Critics' Reviews */}
        <div className={styles.accordionItem}>
          <button
            className={styles.accordionHeader}
            onClick={() => toggleSection("reviews")}
          >
            <span>Critics&apos; Reviews</span>
            <span
              className={`${styles.chevron} ${expandedSection === "reviews" ? styles.open : ""}`}
            >
              ∨
            </span>
          </button>
          {expandedSection === "reviews" && (
            <div className={styles.accordionContent}>
              <blockquote className={styles.reviewQuote}>
                &ldquo;Rising to the new and growing challenge [of societal
                issues] is architect David Wallance and his brilliant
                multi-disciplinary team. What follows is the inspiring story of
                creating a new approach to affordable urban housing from a
                product of worldwide commerce; and a deep understanding of
                global connections between the peoples of the Earth, in the 21st
                century.&rdquo;
                <cite>— Susan Szenasy, Foreword</cite>
              </blockquote>
            </div>
          )}
        </div>
      </div>

      {/* You May Also Like */}
      <div className={styles.relatedSection}>
        <h2 className={styles.relatedTitle}>You may also like</h2>
        <div className={styles.relatedGrid}>
          <div className={styles.relatedBook}>
            <div className={styles.relatedCover}>
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&auto=format&fit=crop"
                alt="Residential Architecture"
                fill
                sizes="(max-width: 380px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <p className={styles.relatedBookTitle}>
              Residential Architecture as Infrastructure
            </p>
          </div>
          <div className={styles.relatedBook}>
            <div className={styles.relatedCover}>
              <Image
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&auto=format&fit=crop"
                alt="Modular Housing Handbook"
                fill
                sizes="(max-width: 380px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <p className={styles.relatedBookTitle}>
              The Modular Housing Handbook
            </p>
          </div>
          <div className={styles.relatedBook}>
            <div className={styles.relatedCover}>
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&auto=format&fit=crop"
                alt="Future Homes"
                fill
                sizes="(max-width: 380px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <p className={styles.relatedBookTitle}>Future Homes</p>
          </div>
          <div className={styles.relatedBook}>
            <div className={styles.relatedCover}>
              <Image
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&auto=format&fit=crop"
                alt="Open Building"
                fill
                sizes="(max-width: 380px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <p className={styles.relatedBookTitle}>
              Open Building for Architects
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
