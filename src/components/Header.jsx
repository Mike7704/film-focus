import Nav from "@/components/Nav";
import Link from "next/link";
import headerStyle from "@/styles/header.module.css";

export default function Header() {
  return (
    <div className={headerStyle.container}>
      <Link aria-label="Home" href={"/"}>
        <h1 className={headerStyle.title}>Film Focus</h1>
      </Link>
      <Nav />
    </div>
  );
}
