import WheelComponent from "@/components/WheelComponent";
import wheelStyle from "@/styles/wheel.module.css";

export default function WheelPicker() {
  return (
    <main className={wheelStyle.page}>
      <WheelComponent />
    </main>
  );
}
