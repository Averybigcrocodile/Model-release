import styles from "./Start.module.css";
import cn from "classnames";
import myImage from "../../icons/icon.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Start = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cn(styles.start)}>
      <div className={cn(styles.language)}>
        <div
          className={cn(styles.language_en)}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </div>
        <div
          className={cn(styles.language_ua)}
          onClick={() => i18n.changeLanguage("ua")}
        >
          UA
        </div>
      </div>
      <Link to="/photosession" className={cn(styles.start_link)}>
        <img src={myImage} alt="photo_icon" className={cn(styles.start_btn)} />
        <span className={cn(styles.start_text)}>
          {t("start.createModelRelease")}
        </span>
      </Link>
    </div>
  );
};

export default Start;
