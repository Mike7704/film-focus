import Link from "next/link";
import footerStyle from "@/styles/footer.module.css";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={footerStyle.container}>
      <p className="opacity-50">Film Focus - 2024</p>
      <div className={footerStyle.links_container}>
        <Link className={footerStyle.link} target="_blank" href="https://github.com/Mike7704">
          <FaGithub className={footerStyle.icon} />
          Michael Cowley
        </Link>
        <Link className={footerStyle.link} target="_blank" href="https://github.com/Lima7048">
          <FaGithub className={footerStyle.icon} />
          Salima Bryce
        </Link>
        <Link className={footerStyle.link} target="_blank" href="https://github.com/Yoni-254">
          <FaGithub className={footerStyle.icon} />
          Yonas Bogale
        </Link>
        <Link className={footerStyle.link} target="_blank" href="https://github.com/91oscar">
          <FaGithub className={footerStyle.icon} />
          Oscar Moran
        </Link>
      </div>
    </footer>
  );
}
