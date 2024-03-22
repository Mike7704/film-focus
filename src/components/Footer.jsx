import Link from "next/link";
import footerStyle from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyle.footer}>
      <section className={footerStyle.section}>
        <h3>Film Focus - Created By</h3>
        <ul className={footerStyle.links_container}>
          <li className={footerStyle.il}>
            <Link target="_blank" href="https://github.com/Mike7704">
              Michael Cowley
            </Link>
          </li>
          <li className={footerStyle.il}>
            <Link target="_blank" href="https://github.com/Lima7048">
              Salima Bryce
            </Link>
          </li>
          <li className={footerStyle.il}>
            <Link target="_blank" href="#">
              Yonas Bogale
            </Link>
          </li>
          <li className={footerStyle.il}>
            <Link target="_blank" href="https://github.com/91oscar">
              Oscar Moran
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}
