import React from "react";
import "./RotatingImages.scss";
// @ts-ignore
import Watch from "./watch.png";
// @ts-ignore
import Headphones from "./headphones.png";
// @ts-ignore
import Vr from "./vr.png";
// @ts-ignore
import Notepad from "./notepad.png";
// @ts-ignore
import Part1 from "./part1.png";
// @ts-ignore
import Part2 from "./part2.png";
// @ts-ignore
import Part3 from "./part3.png";
// @ts-ignore
import Part4 from "./part4.png";

const RotatingImages: React.FC = () => {
  return (
    <div className="rotating-images-container">
      {/* Каждое изображение имеет свои собственные стили */}
      <img src={Watch} alt="Image 1" className="rotating-image watch" />
      <img
        src={Headphones}
        alt="Image 2"
        className="rotating-image headphones"
      />
      <img src={Vr} alt="Image 3" className="rotating-image vr" />
      <img src={Notepad} alt="Image 4" className="rotating-image notepad" />
      <img src={Part1} alt="Image 5" className="rotating-image part1" />
      <img src={Part2} alt="Image 6" className="rotating-image part2" />
      <img src={Part3} alt="Image 7" className="rotating-image part3" />
      <img src={Part4} alt="Image 8" className="rotating-image part4" />
    </div>
  );
};

export default RotatingImages;
