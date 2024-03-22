import Nav from "@/components/Nav";
import headerStyle from "@/styles/header.module.css";

export default function Header() {
  return (
    <div className={headerStyle.container}>
      <h1 className={headerStyle.title}>Film Focus</h1>
      <Nav />
    </div>
  );
}
