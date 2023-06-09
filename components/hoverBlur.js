import styles from "../styles/Home.module.css";

// Contains elements that display when mouse enters a portfolio project container
// Display is default none until mouse enters a project
export default function HoverBlur({ isActive, links }) {
  if (!isActive) {
    return null; // Don't render anything if the hover effect isn't active
  }

  return (
    <>
      <div className={styles.projectHoverBlur}></div>
      <div className={styles.projectHoverButtonsContainer}>
        {links.github && <a href={links.github} target="_blank">
          View on Github
        </a>}
        {links.live && <a href={links.live} target="_blank">
          View live
        </a>}
      </div>
    </>
  );
}
