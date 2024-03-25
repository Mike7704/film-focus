import homeStyle from "@/styles/home.module.css";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  return (
    <div className={homeStyle.container}>
      <h1>Home page</h1>
      <SearchBar />
      <p className="button">Search bar</p>
      <div>
        <h3>Latest Movies</h3>
      </div>
    </div>
  );
}
