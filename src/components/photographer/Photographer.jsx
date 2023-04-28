import cn from "classnames";
import styles from "./Photographer.module.css";
import styles2 from "../../index.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Photographer = ({ nameChange, phoneChange }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { t } = useTranslation();

  const handleClick = () => {
    nameChange(name);
    phoneChange(phone);
  };

  return (
    <div>
      <div className={cn(styles2.label)}>
        <h2>{t("photographer.info")}</h2>
      </div>
      <div className={cn(styles.photographer)}>
        <div className={cn(styles2.inputs)}>
          <span>{t("photographer.name")}:</span>
          <input
            className={cn(styles.photographer__name)}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={cn(styles2.inputs)}>
          <span>{t("photographer.phone")}:</span>
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
          className={cn(styles2.btn)}
          onClick={handleClick}
        >
          {t("photosession.next")}
        </Link>
      </div>
    </div>
  );
};

export default Photographer;
