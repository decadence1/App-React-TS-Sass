import React from "react";
// @ts-ignore
import Phone from "./phone.png";
import MiniSection from "./MiniSection";
import "./MainSection.scss";
import RotatingImages from "./RotatingImages";

const MainSection: React.FC = () => {
  return (
    <div className="main-section">
      <RotatingImages />
      <p className="main-text">
        Это текст это <br></br>текст это текст это <br></br>текст это текст
      </p>
      <p className="mini-text">Это текст это текст</p>{" "}
      <img src={Phone} alt="Ваше изображение" className="phone" />
      <MiniSection
        number={1}
        text="Это текст это текст это текст это текст это текст это текст"
      />
      <MiniSection
        number={2}
        text="Это текст это текст это текст это текст это текст это текст"
      />
      <MiniSection
        number={3}
        text="Это текст это текст это текст это текст это текст это текст"
      />
      <MiniSection
        number={4}
        text="Это текст это текст это текст это текст это текст это текст"
      />
    </div>
  );
};

export default MainSection;
