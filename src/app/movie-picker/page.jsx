import wheelStyle from "@/styles/wheel.module.css";
import WheelComponent from "@/components/WheelComponent";

export default function Picker() {
  return (
    <main className={wheelStyle.container}>
      <p>Welcome to Picker</p>
      <WheelComponent />
    </main>
  );
}
