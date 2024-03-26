import homeStyle from "@/styles/home.module.css";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className={homeStyle.container}>
      <div>
        <p>Welcome to Film Focus.</p>
        <p>Browse our large collection of films to find what to watch next.</p>
      </div>
      <SearchBar />
      <div>
        <h3>Latest Movies</h3>
      </div>
    </main>
  );
}
