import homeStyle from "@/styles/home.module.css";

export default function Home() {
  return (
    <div className={homeStyle.container}>
      <h1>Home page</h1>
      <p className="button">Search bar</p>
      <div>
        <h3>Latest Movies</h3>
      </div>
    </div>
  );
}
