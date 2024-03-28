import homeStyle from "@/styles/home.module.css";
import SearchBar from "@/components/SearchBar";
import AnimateIn from "@/components/AnimateIn";
import Image from "next/image";

export default function Home() {
  return (
    <main className={homeStyle.page}>
      <AnimateIn delayStart={0}>
        <div className={homeStyle.text_container}>
          <Image aria-label="logo image" src={`/images/logo.png`} width={500} height={500} alt={`logo image`} />
          <h2 aria-label="Welcome message" className="text-3xl">Welcome to Film Focus!</h2>
          <p aria-label="APP overview">Browse our large collection of movies and find what to watch next.</p>
        </div>
      </AnimateIn>
      <AnimateIn delayStart={1}>
        <SearchBar />
      </AnimateIn>
    </main>
  );
}
