import WheelComponent from "@/components/WheelComponent";
import wheelStyle from "@/styles/wheel.module.css";

export default function WheelPicker() {
  return (
    <main className={wheelStyle.page}>
      <h3 aria-label="wheel information" className={wheelStyle.heading}>
        Not sure what to watch? Spin the wheel for it to make the choice for you.
      </h3>
      <WheelComponent />
    </main>
  );
}
