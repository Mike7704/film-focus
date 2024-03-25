import homeStyle from "@/styles/home.module.css";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  return (
    <div className={homeStyle.container}>
      <h1>Home page</h1>
      <div>
        <h2>Welcome to Film Focus.</h2>
        <p>Browse our large collection of films to find what to watch next.</p>
      </div>
      <SearchBar />
      <p className="button">Search bar</p>
      <div>
        <h3>Latest Movies</h3>
      </div>
    </div>
  );
}
