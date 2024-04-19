import React from "react";
import "./MiniSection.scss";

interface MiniSectionProps {
  number: number;
  text: string;
}

const MiniSection: React.FC<MiniSectionProps> = ({ number, text }) => {
  return (
    <div className="mini-section">
      <div className="number">{number}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default MiniSection;
