import Link from "next/link";
import style from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <section className={style.section}>
        <h3>Page created by: </h3>
        <ul>
          <li className={style.il}>
            <Link target="_blank" href="https://github.com/Mike7704">
              Michael Cowley
            </Link>
          </li>
          <li className={style.il}>
            <Link target="_blank" href="https://github.com/Lima7048">
              Salima Bryce
            </Link>
          </li>
          <li className={style.il}>
            <Link target="_blank" href="#">
              Yonas Bogale
            </Link>
          </li>
          <li className={style.il}>
            <Link target="_blank" href="https://github.com/91oscar">
              Oscar Moran
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}
