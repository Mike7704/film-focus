import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import footerStyle from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyle.container}>
      <p className="text-xs opacity-50">Film Focus - 2024</p>
      <div className={footerStyle.links_container}>
        <Link
          role="button"
          aria-describedby="GIT Michael Cowley"
          aria-pressed="false"
          className={footerStyle.link}
          target="_blank"
          href="https://github.com/Mike7704"
        >
          <FaGithub className={footerStyle.icon} />
          Michael Cowley
        </Link>
        <Link
          role="button"
          aria-describedby="GIT Salima Bryce"
          aria-pressed="false"
          className={footerStyle.link}
          target="_blank"
          href="https://github.com/Lima7048"
        >
          <FaGithub className={footerStyle.icon} />
          Salima Bryce
        </Link>
        <Link
          role="button"
          aria-describedby="GIT Oscar Moran"
          aria-pressed="false"
          className={footerStyle.link}
          target="_blank"
          href="https://github.com/91oscar"
        >
          <FaGithub className={footerStyle.icon} />
          Oscar Moran
        </Link>
      </div>
    </footer>
  );
}
