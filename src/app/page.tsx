"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import styles from "./page.module.scss";

const workProjects = [
  {
    id: 1,
    title: "Modern Living Space",
    category: "Residential",
    year: "2024",
    description:
      "A minimalist residential project featuring clean lines and natural light integration.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Urban Loft Interior",
    category: "Interior Design",
    year: "2023",
    description:
      "Contemporary loft design with focus on functionality and aesthetic harmony.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop",
    ],
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("work");
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <main>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Work Section */}
      {(activeSection === "work" || activeSection.startsWith("work-")) && (
        <div className={styles.container}>
          {/* Section Title */}
          <div
            className={`${styles.sectionTitle} ${mounted ? styles.animateIn : ""}`}
          >
            <h1 className={styles.sectionTitleText}>01 work</h1>
          </div>

          <div className={styles.grid}>
            {workProjects.map((project, projectIndex) => (
              <article
                key={project.id}
                className={`${styles.project} ${mounted ? styles.animateIn : ""}`}
                style={{ animationDelay: `${projectIndex * 0.2}s` }}
              >
                <div className={styles.imageSlider}>
                  {project.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`${styles.imageWrapper} ${
                        imgIndex === currentImageIndex ? styles.active : ""
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${imgIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>{project.title}</h2>
                  <p className={styles.category}>
                    {project.category} / {project.year}
                  </p>
                  <p className={styles.description}>{project.description}</p>
                </div>
                <div className={styles.sliderDots}>
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`${styles.dot} ${
                        idx === currentImageIndex ? styles.activeDot : ""
                      }`}
                      onClick={() => setCurrentImageIndex(idx)}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Work Section Text */}
          <div
            className={`${styles.workTextSection} ${mounted ? styles.animateIn : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            <p className={styles.workParagraph}>
              Our work, as we&apos;ve already said, integrates design thinking
              and technical skill.
            </p>

            <p className={styles.workParagraph}>
              But what is design thinking? Unlike engineering, where a singular
              answer to a problem can be found through a linear and analytical
              process, design thinking is iterative. It begins with empathy. We
              listen to, absorb, and reflect on the needs and wishes that our
              clients present to us. There is never just one solution, nor is
              there always a single best solution — instead, there are multiple
              solutions, each better in different ways. We sort through the
              options critically. Intuition plays a role. The eventual solution
              sometimes just feels right, and if it is right, it will have a
              certain clarity that should be evident without too much
              explanation.
            </p>

            <p className={styles.workParagraph}>
              And technical skill? That&apos;s something we&apos;ve acquired
              through years of experience. You have to have sustained curiosity
              about how things work (that&apos;s the research part). Not least,
              it requires the willingness to take pains, resourcefully and
              creatively, to get the intended result.
            </p>

            <p className={styles.workParagraph}>
              This is what we do. It&apos;s what we love to do.
            </p>
          </div>
        </div>
      )}

      {/* Book Section */}
      {activeSection === "book" && (
        <div className={styles.container}>
          {/* Section Title */}
          <div
            className={`${styles.sectionTitle} ${mounted ? styles.animateIn : ""}`}
          >
            <h1 className={styles.sectionTitleText}>02 book</h1>
          </div>

          <div className={styles.bookSection}>
            <div className={styles.bookContainer}>
              <div
                className={`${styles.bookCoverWrapper} ${mounted ? styles.animateIn : ""}`}
              >
                <div className={styles.bookCover}>
                  <Image
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop"
                    alt="The Future of Modular Architecture - Book Cover"
                    className={styles.coverImage}
                    fill
                    sizes="(max-width: 768px) 280px, 400px"
                  />
                </div>
              </div>

              <div
                className={`${styles.bookContent} ${mounted ? styles.animateIn : ""}`}
                style={{ animationDelay: "0.2s" }}
              >
                <p className={styles.bookParagraph}>
                  David&apos;s book,{" "}
                  <a
                    href="https://www.routledge.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bookLink}
                  >
                    The Future of Modular Architecture
                  </a>
                  , presents an unprecedented proposal for mass-customized mid-
                  and high-rise modular housing that can be manufactured and
                  distributed on a global scale. The book&apos;s thesis springs
                  from the idea that adopting the dimensional standards of the
                  existing intermodal freight transportation system is the key
                  to achieving meaningful economies of scale.
                </p>

                <p className={styles.bookParagraph}>
                  Advocating for open-source design based on this new modular
                  standard, David shows how global supply chains can be
                  harnessed to realize the long-held promise that housing will
                  be a well-designed and affordable industrial product. We are
                  on the cusp of a transformative change in the way we design
                  and build our cities.
                </p>

                <p className={styles.bookParagraph}>
                  The book&apos;s argument is that the future of modular
                  architecture is profoundly intertwined with globalization,
                  equitable urbanism, and sustainable development. David
                  addresses these timely issues through a specific approach
                  grounded in fundamental concepts. Going beyond the individual
                  modular building, he forecasts the emergence of a new type of
                  design, manufacturing, and construction enterprise.
                </p>

                <p className={styles.forewordIntro}>
                  From the book&apos;s Foreword by Susan Szenasy:
                </p>

                <blockquote className={styles.bookQuote}>
                  &ldquo;Rising to the new and growing challenge [of societal
                  issues] is architect David Wallance and his brilliant
                  multi-disciplinary team. What follows is the inspiring story
                  of creating a new approach to affordable urban housing from a
                  product of worldwide commerce; and a deep understanding of
                  global connections between the peoples of the Earth, in the
                  21st century.&rdquo;
                </blockquote>

                <p className={styles.bookParagraph}>
                  At 302 pages with 130 color illustrations, in hard-bound and
                  paperback, the book represents 15 years of research, technical
                  development, and design. Written in an approachable style, the
                  book is a must read for professionals in architecture and
                  design, urban planning, housing policy, construction, as well
                  as the general reader with an interest in these topics.
                </p>

                <p className={styles.orderParagraph}>
                  Click{" "}
                  <a
                    href="https://www.routledge.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bookLink}
                  >
                    here
                  </a>{" "}
                  to order a copy.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      {(activeSection === "about" || activeSection.startsWith("about-")) && (
        <div className={styles.container}>
          {/* Section Title */}
          <div
            className={`${styles.sectionTitle} ${mounted ? styles.animateIn : ""}`}
          >
            <h1 className={styles.sectionTitleText}>03 about</h1>
          </div>

          <div className={styles.imageGrid}>
            <div
              className={`${styles.imageWrapper} ${mounted ? styles.animateIn : ""}`}
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop"
                alt="Interior Design"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div
              className={`${styles.imageWrapper} ${mounted ? styles.animateIn : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop"
                alt="Exterior Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div
            className={`${styles.aboutContent} ${mounted ? styles.animateIn : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            <p className={styles.paragraph}>
              Our work, as we&apos;ve already said, integrates design thinking
              and technical skill.
            </p>

            <p className={styles.paragraph}>
              But what is design thinking? Unlike engineering, where a singular
              answer to a problem can be found through a linear and analytical
              process, design thinking is iterative. It begins with empathy. We
              listen to, absorb, and reflect on the needs and wishes that our
              clients present to us. There is never just one solution, nor is
              there always a single best solution — instead, there are multiple
              solutions, each better in different ways. We sort through the
              options critically. Intuition plays a role. The eventual solution
              sometimes just feels right, and if it is right, it will have a
              certain clarity that should be evident without too much
              explanation.
            </p>

            <p className={styles.paragraph}>
              And technical skill? That&apos;s something we&apos;ve acquired
              through years of experience. You have to have sustained curiosity
              about how things work (that&apos;s the research part). Not least,
              it requires the willingness to take pains, resourcefully and
              creatively, to get the intended result.
            </p>

            <p className={styles.paragraph}>
              This is what we do. It&apos;s what we love to do.
            </p>

            <p className={styles.paragraph}>
              We provide the kind of hands-on principal-level attention that
              only a small practice can offer, and our decades in practice with
              large, award-winning firms gives us a level of experience that few
              small firms can match.
            </p>

            <p className={styles.paragraph}>
              We design single-family residences, multi-family housing, and
              cultural/institutional projects. We also like to take on projects
              that don&apos;t fit neatly into a category, where our
              research-based approach makes a difference. We&apos;re not afraid
              to innovate.
            </p>

            <p className={styles.paragraph}>
              DRA/W is based in New York. Connect with us at{" "}
              <a href="mailto:info@dra-w.com" className={styles.emailLink}>
                info@dra-w.com
              </a>
              .
            </p>

            <div className={styles.newsletterSection}>
              <p className={styles.newsletterTitle}>
                Please sign up to receive occasional newsletters and blog posts:
              </p>

              <form
                className={styles.newsletterForm}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="first name"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="last name"
                      className={styles.input}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    placeholder="email"
                    className={styles.input}
                    required
                  />
                </div>
                <button type="submit" className={styles.subscribeButton}>
                  [SUBSCRIBE]
                </button>
                <p className={styles.requiredText}>all fields are required</p>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
