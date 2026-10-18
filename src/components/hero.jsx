// import { heroCardMap } from "../constants";
// import HeroCard from "../ui/heroCard";
// import "./hero.css";

// const Hero = () => {
//   return (
//     <div className="hero-main">
//       <div className="hero-subject">
//         <div className="hero-image">
//           <img
//             src="https://tse1.explicit.bing.net/th/id/OIP.753sCO28mhzChVzGHhI2wgHaHa?r=0&pid=ImgDet&w=195&h=195&c=7&dpr=1.4&o=7&rm=3"
//             alt=""
//           />
//           <h3>Full-Stack Developer</h3>
//         </div>
//         <h2>MERN, NEXT.js, MySQL, Docker</h2>
//         <p>
//           Creates the visual parts users see and interact. Manages server logic,
//           APIs, and database storage to process data. Connects both halves to
//           deliver complete, working software from start to finish.
//         </p>
//       </div>
//       <div className="hero-bottom">
//         {heroCardMap.map((card, index) => (
//           <HeroCard key={index} card={card} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import { heroCardMap } from "../constants";
// import HeroCard from "../ui/heroCard";
import "./hero.css";

const Hero = () => {
  const projects = [
    {
      title: "Fashion Marketplace",
      category: "E-commerce · Next.js, Node.js, Tailwind, Razorpay",
      image: "/commerce.jpeg",
      link: "https://shop-market-l4e2.vercel.app/",
      git: "https://github.com/anoopvr33/shop-market.git",
    },
    {
      title: "Modern ERP System",
      category: "Web Design · React, Redux, MUI",
      image: "daan.jpeg",
      link: "https://erp.daanhotels.com/dashboard?index=1",
      git: "https://github.com/anoopvr33/DaanERP.git",
    },
    {
      title: "Houseboat Booking Platform",
      category: "Static · React",
      image: "tolake.jpeg",
      link: "https://tolake.in",
      git: "https://github.com/anoopvr33/TolakeGit.git",
    },
  ];

  const services = [
    {
      title: "Frontend Development",
      description:
        "Building clean, responsive interfaces with React, Next.js, and modern CSS.",
      number: "01",
    },
    {
      title: "Backend Development",
      description:
        "Creating secure APIs, database systems, and scalable server-side applications.",
      number: "02",
    },
    {
      title: "Full-Stack Solutions",
      description:
        "Connecting frontend, backend, and databases into complete digital products.",
      number: "03",
    },
    {
      title: "Deployment & Optimization",
      description:
        "Deploying applications and improving performance, reliability, and SEO.",
      number: "04",
    },
  ];

  return (
    <main className="portfolio-page">
      {/* <div className="portfolio-heading">
        <span>PERSONAL PORTFOLIO</span>
        <h1>anoopvr.dev</h1>
      </div> */}

      <div className="portfolio-shell">
        <header className="portfolio-nav">
          {/* <a href="#" className="portfolio-brand">
            <span className="brand-mark" />
            <span>Anoop VR</span>
          </a> */}

          <div className="portfolio-availability">
            <span className="availability-dot" />
            Available for work
          </div>

          <a href="#contact" className="portfolio-menu">
            Let's Talk <span>↗</span>
          </a>
        </header>

        <section className="hero-subject">
          <div className="hero-content hero">
            <div className="hero-profile">
              <img src="/mypc.jpeg" alt="Anoop VR profile" />

              <div>
                <h3>Anoop VR</h3>
                <p>Full-Stack Developer</p>
              </div>
            </div>
            <div className="hero-copy">
              <span className="eyebrow">
                DESIGNING & DEVELOPING FOR THE WEB
              </span>

              <h2>
                Your Ideas,
                <br />
                Perfectly Built.
              </h2>

              <p className="hero-description">
                Crafting modern, high-performance digital experiences from the
                ground up—turning concepts into production-ready products. I
                bridge intuitive front-end interfaces with scalable backends,
                using modern frameworks like <b>React</b>, <b>Next.js</b>, and{" "}
                <b>Node.js</b>
                alongside robust databases like <b>MySQL</b> and <b>MongoDB</b>.{" "}
                <br /> To keep momentum high, I lean on cutting-edge AI tools
                like <b>Claude</b>
                and <b>Antigravity</b> to accelerate prototyping, streamline
                builds, and ship quality code faster.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button-primary">
                  Let's Work Together <span>↗</span>
                </a>

                <a href="#projects" className="button-secondary">
                  View My Work <span>↓</span>
                </a>
              </div>
            </div>
            <div className="hero-tech">
              <span>REACT.JS</span>
              <span>NEXT.JS</span>
              <span>NODE.JS</span>
              <span>MYSQL</span>
              <span>DOCKER</span>
              <span>HOSTINGER</span>
            </div>{" "}
          </div>
          <div className="hero-visual hero">
            <img className="hero-img-sub" src="/hero-bg.png" alt="" />
          </div>
        </section>

        <section className="portfolio-intro">
          <div className="intro-visual">
            <a
              style={{ position: "relative", display: "inline-block" }}
              href="https://janvi-saloon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="janvi.jpeg" alt="" />{" "}
              <span className="project-arrow">↗</span>{" "}
            </a>
            {/* <div className="intro-orbit">
              <span></span>
            </div> */}
          </div>

          <div className="intro-content">
            <span className="eyebrow">A NOTE FROM MY DESK</span>
            <h3>Good products start with good thinking.</h3>
            <p>
              I combine strong technical capabilities with strategic thinking to
              deliver high-quality, impactful results. My core skill set spans
              alongside proficiency. Beyond technical expertise, I bring sharp
              analytical problem-solving, effective project coordination, and a
              strong drive for continuous learning.
            </p>
            <div className="intro-signature">
              <li>Full-Stack Development</li>{" "}
              <li> Next.js, React, Tailwind CSS, and Node.js</li>
              <li>Node.js, MongoDB, MySQL, Docker, AWS, Vercel and Railway</li>
            </div>
          </div>
        </section>

        <section className="portfolio-clients">
          <span className="eyebrow">MY TECHNOLOGY STACK</span>
          <div className="technology-list">
            <span>◈ React</span>
            <span>Next.js</span>
            <span>⌘ Node.js</span>
            <span>MongoDB</span>
            <span>MySQL</span>
          </div>
        </section>

        <section className="portfolio-projects" id="projects">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SELECTED PROJECTS</span>
              <h3>Things I've built.</h3>
            </div>
            <span className="section-count">01 — 03</span>
          </div>

          <div className="project-track">
            {projects.map((project, index) => (
              <div>
                <a
                  href={project.link}
                  className="project-card"
                  key={project.title}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <span className="project-arrow">↗</span>
                    <span className="project-index">0{index + 1}</span>
                  </div>

                  <div className="project-info">
                    <h4>{project.title}</h4>
                    <span>{project.category}</span>
                  </div>
                </a>
                <a
                  style={{ fontSize: "10px" }}
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-services" id="services">
          <a href="#services" className="services-anchor">
            What I Do <span>↓</span>
          </a>

          <div className="section-heading services-heading">
            <div>
              <span className="eyebrow">HOW I CAN HELP</span>
              <h3>From idea to reality.</h3>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span>{service.number}</span>
                  <span className="service-icon">↗</span>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-about">
          <div>
            <span className="eyebrow">A LITTLE ABOUT ME</span>
            <h3>Developer by profession. Problem solver by nature.</h3>
          </div>

          <p>
            I enjoy building applications that combine a polished frontend with
            dependable backend architecture. I care about the details,
            maintainable code, and making every interaction feel natural.
          </p>
        </section>

        <section className="portfolio-contact" id="contact">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h3>Let's make something meaningful.</h3>
          <p>
            Have an idea, a project, or an opportunity? I'd love to hear about
            it.
          </p>

          <div className="hero-actions">
            <a
              href="mailto:anoopvranoop33@gmail.com"
              className="button-primary"
            >
              Get in Touch <span>↗</span>
            </a>
            <a href="https://wa.me/9745962256" className="button-primary">
              whatsApp <span>↗</span>
            </a>
            <a
              href="https://github.com/anoopvr33"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              GitHub <span>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anoop-v-r-9b6b67275"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              LinkedIn <span>↗</span>
            </a>
          </div>
        </section>

        <footer className="portfolio-footer">
          {/* <a href="#" className="portfolio-brand">
            <span className="brand-mark" />
            <span>Anoop VR</span>
          </a> */}
          <span>Designed & built with care.</span>
          <span>© {new Date().getFullYear()} Anoop VR</span>
        </footer>
      </div>
    </main>
  );
};

export default Hero;
