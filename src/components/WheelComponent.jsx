"use client";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import wheelStyle from "@/styles/wheel.module.css";

export default function WheelComponent() {
  const [mustSpin, setMustSpin] = useState(false);
  const [optionNumber, setOptionNumber] = useState(0);
  const [wheelData, setWheelData] = useState([{ option: "Movie #1" }, { option: "Movie #2" }, { option: "Movie #3" }]);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("Spin the wheel using the button below.");

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newOptionNumber = Math.floor(Math.random() * wheelData.length);
      setOptionNumber(newOptionNumber);
      setMustSpin(true);
      setResult("Here we go!");
    }
  };

  const handleAddMovieOption = () => {
    // Limit to 10 options
    if (wheelData.length < 10) {
      const newData = [...wheelData, { option: inputValue }];
      setWheelData(newData);
      setInputValue("");
    }
  };

  const handleRemoveMovieOption = (indexToRemove) => {
    // There needs to be at least 1 option on the wheel
    if (wheelData.length > 1) {
      const newData = [...wheelData]; // Copy the data array
      newData.splice(indexToRemove, 1); // Remove the given movie
      setWheelData(newData);
    }
  };

  return (
    <div aria-label="Wheel spin" className={wheelStyle.container}>
      <div className={wheelStyle.wheel_container}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={optionNumber}
          data={wheelData}
          backgroundColors={["#FFBE0B", "#fb5607", "#3A86FF", "#FD2B3B", "#8338EC", "#FF006E"]}
          textColors={["#ffffff"]}
          spinDuration={0.2}
          onStopSpinning={() => {
            setMustSpin(false);
            setResult(`The wheel has chosen: ${wheelData[optionNumber].option}`);
          }}
        />
        <p className={wheelStyle.result}>{result}</p>
        <button role="button" aria-describedby="SPIN" aria-pressed="false" className={wheelStyle.buttonSpin} onClick={handleSpinClick}>
          SPIN
        </button>
      </div>
      <div className={wheelStyle.input_container}>
        <h3 aria-label="wheel information" className={wheelStyle.heading}>
          Not sure what to watch? Spin the wheel for it to make the choice for you.
        </h3>
        <form action={handleAddMovieOption} className={wheelStyle.form_container}>
          <input
            aria-label="Enter movie name"
            className="border-gray-400"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter movie name"
            required
          />
          <button role="button" aria-describedby="add movie" aria-pressed="false" className={wheelStyle.buttonAdd} type="submit">
            Add Movie
          </button>
        </form>
        {wheelData.map((movieOption, index) => (
          <div key={index}>
            <span>{movieOption.option}</span>
            <button
              role="button"
              aria-describedby="Remove movie"
              aria-pressed="false"
              className={wheelStyle.buttonRemove}
              onClick={() => handleRemoveMovieOption(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
