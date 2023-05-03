import cn from "classnames";
import styles from "./MyRelease.module.css";
import { useTranslation } from "react-i18next";

const MyRelease = ({ namePh, nameMd }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.release)}>
      <h2>{t("release.name")}</h2>
      <div className={cn(styles.info)}>
        <p>
          {t("release.text1")}
          <span className={cn(styles.names)}> {nameMd}</span>
          {t("release.text2")}
          <span className={cn(styles.names)}> {namePh}</span>
          {t("release.text3")}
        </p>
        <p>{t("release.text4")}</p>
        <p>{t("release.text5")}</p>
      </div>
    </div>
  );
};

export default MyRelease;
