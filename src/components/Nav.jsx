import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import headerStyle from "@/styles/header.module.css";

export default function Nav() {
  const { userId } = auth();
  return (
    <nav className={headerStyle.nav_container}>
      <Link aria-label="Home" className={headerStyle.nav_button} href={"/"}>
        Home
      </Link>
      <Link aria-label="movie-catalogue" className={headerStyle.nav_button} href={"/movie-catalogue"}>
        Movie Catalogue
      </Link>
      <Link aria-label="movie-picker" className={headerStyle.nav_button} href={"/movie-picker"}>
        Movie Picker
      </Link>
      {userId ? <UserButton /> : <SignInButton />}
    </nav>
  );
}
