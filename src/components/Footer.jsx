import Link from "next/link";
import footerStyle from "@/styles/footer.module.css";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={footerStyle.footer}>
      <section className={footerStyle.section}>
        <h3>Film Focus - Created By</h3>
        <ul className={footerStyle.links_container}>
          <li className={footerStyle.il}>
            <Link target="_blank" href="https://github.com/Mike7704">
              <FaGithub className={footerStyle.icon} />
              Michael Cowley
            </Link>
          </li>
          <li className={footerStyle.il}>
            <Link target="_blank" href="https://github.com/Lima7048">
              <FaGithub className={footerStyle.icon} />
              Salima Bryce
            </Link>
          </li>
          <li className={footerStyle.il}>
            <Link target="_blank" href="https://github.com/Yoni-254">
              <FaGithub className={footerStyle.icon} />
              Yonas Bogale
            </Link>
          </li>
          <li className={footerStyle.il}>
            <Link target="_blank" href="https://github.com/91oscar">
              <FaGithub className={footerStyle.icon} />
              Oscar Moran
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}
