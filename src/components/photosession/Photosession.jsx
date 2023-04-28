import cn from "classnames";
import styles from "./Photosession.module.css";
import styles2 from "../../index.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Photosession = ({
  nameOfShootChange,
  dateOfShootChange,
  placeOfShootChange,
}) => {
  const { t } = useTranslation();
  const [nameOfShoot, setNameOfShoot] = useState("");
  const [dateOfShoot, setDateOfShoot] = useState("");
  const [placeOfShoot, setPlaceOfShoot] = useState("");

  const handleClick = () => {
    nameOfShootChange(nameOfShoot);
    dateOfShootChange(dateOfShoot);
    placeOfShootChange(placeOfShoot);
  };

  return (
    <div>
      <div className={cn(styles2.label)}>
        <h2>{t("photosession.info")}</h2>
      </div>
      <div className={cn(styles.photosession)}>
        <div className={cn(styles2.inputs)}>
          <span>{t("photosession.name")}:</span>
          <input
            type="text"
            value={nameOfShoot}
            onChange={(e) => setNameOfShoot(e.target.value)}
          />
        </div>
        <div className={cn(styles2.inputs)}>
          <span>{t("photosession.place")}:</span>
          <input
            type="text"
            value={placeOfShoot}
            onChange={(e) => setPlaceOfShoot(e.target.value)}
          />
        </div>
        <div className={cn(styles2.inputs)}>
          <span>{t("photosession.date")}:</span>
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
          className={cn(styles2.btn)}
          onClick={handleClick}
        >
          {t("photosession.next")}
        </Link>
      </div>
    </div>
  );
};

export default Photosession;
