import React from "react";
import "./Phone.scss"; // Импорт стилей для телефона

interface PhoneProps {
  imageUrl: string;
}

const Phone: React.FC<PhoneProps> = ({ imageUrl }) => {
  return (
    <div className="phone">
      <img src={imageUrl} alt="Phone" />
    </div>
  );
};

export default Phone;
