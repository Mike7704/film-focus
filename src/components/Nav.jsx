import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";
import headerStyle from "@/styles/header.module.css";

export default function Nav() {
  const { userId } = auth();
  return (
    <nav className={headerStyle.nav_container}>
      <Link className={headerStyle.nav_button} href={"/"}>
        Home
      </Link>
      <Link className={headerStyle.nav_button} href={"/movie-picker"}>
        Movie-Picker{" "}
      </Link>
      <Link className={headerStyle.nav_button} href={"/movie-catalogue"}>
        Movie-catalogue
      </Link>
      <Link className={headerStyle.nav_button} href={"/watchlist"}>
        Watchlist
      </Link>
      {userId ? <UserButton /> : <SignInButton />}
    </nav>
  );
}
