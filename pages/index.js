import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.aboutContainer}>
        <h2
          id="about"
          className={`${utilStyles.headingMd} ${styles.aboutHeading}`}
        >
          About
        </h2>
        <p className={styles.aboutContent}>
          A junior web developer with experience primarily in frontend React and
          interests in UI/UX, backend integration, and learning other
          technologies.
        </p>
        {/* Optional profile image for future */}
        {/* <Image
          src="/images/profile.jpg"
          height={130}
          width={130}
          alt="Your Name"
          className={`${utilStyles.borderCircle} ${styles.aboutProfileImg}`}
        /> */}
      </section>
      <Portfolio />
      <section className={styles.skillsContainer}>
        <h2 id="skills" className={utilStyles.headingMd}>
          Skills
        </h2>
        <ul className={styles.skillList}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Tailwind</li>
          <li>Git and Github</li>
          <li>MongoDB</li>
        </ul>
      </section>
      <section className={styles.contactContainer}>
        <Contact />
      </section>
    </Layout>
  );
}
