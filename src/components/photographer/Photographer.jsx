import cn from "classnames";
import styles from "./Photographer.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Photographer = ({ nameChange, phoneChange }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    nameChange(name);
    phoneChange(phone);
  };

  return (
    <div className={cn(styles.photographer)}>
      <h1>Інформація про фотографа</h1>
      <div className={cn(styles.inputs)}>
        <span>Ім'я та прізвище:</span>
        <input
          className={cn(styles.photographer__name)}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={cn(styles.inputs)}>
        <span>Телефон:</span>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <Link
        to={{
          pathname: "/model",
          state: {
            nameChange,
            phoneChange,
          },
        }}
        className={cn(styles.btn)}
        onClick={handleClick}
      >
        Далі
      </Link>
    </div>
  );
};

export default Photographer;
