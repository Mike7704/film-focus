import homeStyle from "@/styles/home.module.css";

export default function Home() {
  return (
    <div className={homeStyle.container}>
      <div>
        <h2>Welcome to Film Focus.</h2>
        <p>Browse our large collection of films to find what to watch next.</p>
      </div>
      <p className="button">Search bar</p>
      <div>
        <h3>Latest Movies</h3>
      </div>
    </div>
  );
}
