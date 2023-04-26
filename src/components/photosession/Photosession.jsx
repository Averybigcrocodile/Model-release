import cn from "classnames";
import styles from "./Photosession.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Photosession = ({
  nameOfShootChange,
  dateOfShootChange,
  placeOfShootChange,
}) => {
  const [nameOfShoot, setNameOfShoot] = useState("");
  const [dateOfShoot, setDateOfShoot] = useState("");
  const [placeOfShoot, setPlaceOfShoot] = useState("");

  const handleClick = () => {
    nameOfShootChange(nameOfShoot);
    dateOfShootChange(dateOfShoot);
    placeOfShootChange(placeOfShoot);
  };
  return (
    <div className={cn(styles.photosession)}>
      <h2>Інформація про фотосесію</h2>
      <div className={cn(styles.inputs)}>
        <span>Назва:</span>
        <input
          type="text"
          value={nameOfShoot}
          onChange={(e) => setNameOfShoot(e.target.value)}
        />
      </div>
      <div className={cn(styles.inputs)}>
        <span>Місце зйомки:</span>
        <input
          type="text"
          value={placeOfShoot}
          onChange={(e) => setPlaceOfShoot(e.target.value)}
        />
      </div>
      <div className={cn(styles.inputs)}>
        <span>Дата зйомки:</span>
        <input
          type="text"
          value={dateOfShoot}
          onChange={(e) => setDateOfShoot(e.target.value)}
        />
      </div>
      <Link
        to={{
          pathname: "/photographer",
          state: {
            nameOfShootChange,
            dateOfShootChange,
            placeOfShootChange,
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

export default Photosession;
