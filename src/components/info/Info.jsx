import cn from "classnames";
import styles from "./Info.module.css";
import styles2 from "../../index.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();
  function handleHide() {
    const hiddenElems = document.querySelectorAll(`.${styles.hide_on_click}`);
    hiddenElems.forEach((el) => {
      el.style.display = "none";
    });
  }
  return (
    <>
      <div className={cn(styles2.label)}>
        <h2>{t("info.name")}</h2>
      </div>
      <div className={cn(styles.info)}>
        <p>{t("info.text1")}</p>
        <p>{t("info.text2")}</p>
        <p>{t("info.text3")}</p>
        <Link to="/sign" className={cn(styles2.btn)} onClick={handleHide}>
          {t("info.confirm")}
        </Link>
      </div>
    </>
  );
};

export default Info;
