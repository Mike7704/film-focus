import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";

export default function Nav() {
  const { userId } = auth();
  return (
    <nav className=" m-1 text-slate-800">
      <h1 className=" m-1 text-emerald-600">Film Focus Nav</h1>
      <Link href={"/"}>Home</Link>
      <Link href={"/movie-picker"}>Movie-Picker </Link>
      <Link href={"/movie-catalogue"}>Movie-catalogue</Link>
      <Link href={"/watchlist"}>Watchlist</Link>
      {userId ? <UserButton /> : <SignInButton />}
    </nav>
  );
}
