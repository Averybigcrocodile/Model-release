import cn from "classnames";
import styles from "./MainPage.module.css";
import styles2 from "../../index.module.css";
import MyRelease from "../form/MyRelease";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { useTranslation } from "react-i18next";

const MainPage = ({
  nameOfShoot,
  dateOfShoot,
  placeOfShoot,
  namePh,
  phonePh,
  photoMd,
  nameMd,
  dateOfBirthMd,
  cityMd,
  adressMd,
  passportMd,
  phoneMd,
  signPh,
  signMd,
}) => {
  const { t } = useTranslation();

  function savePageAsImage() {
    const elemForm = document.getElementById("myForm");
    const hiddenElems = document.querySelectorAll(`.${styles.hide_on_save}`);

    hiddenElems.forEach((el) => {
      el.style.visibility = "hidden";
    });

    html2canvas(elemForm, { backgroundColor: null }).then(function (canvas) {
      canvas.toBlob(
        function (blob) {
          saveAs(blob, "page.jpeg");
        },
        "image/jpeg",
        1
      );
    });
  }

  return (
    <div id="myForm" className={cn(styles.personal__info)}>
      <div className={cn(styles.release)}>
        <MyRelease namePh={namePh} nameMd={nameMd} />
      </div>

      <div className={cn(styles.info)}>
        <div className={cn(styles.personal__md)}>
          <div className={cn(styles.personal__photo)}>
            <img src={photoMd} alt={t("main.photo")} />
          </div>
          <div className={cn(styles.personal__md_info)}>
            <span>
              {t("model.name")}: {nameMd}
            </span>
            <span>
              {t("model.date")}: {dateOfBirthMd}
            </span>
            <span>
              {t("model.city")}: {cityMd}
            </span>
            <span>
              {t("model.adress")}: {adressMd}
            </span>
            <span>
              {t("model.passport")}: {passportMd}
            </span>
            <span>
              {t("model.phone")}: {phoneMd}
            </span>
          </div>
        </div>

        <div className={cn(styles.personal__info_shoot)}>
          <span>
            {t("photosession.name")}: {nameOfShoot}
          </span>
          <span>
            {t("photosession.date")}: {dateOfShoot}
          </span>
          <span>
            {t("photosession.place")}: {placeOfShoot}
          </span>
          <span>
            {t("photographer.name")}: {namePh}
          </span>
          <span>
            {t("photographer.phone")}: {phonePh}
          </span>
        </div>
      </div>

      <div className={cn(styles.date_and_sings)}>
        <div className={cn(styles.date)}>
          {" "}
          {t("photosession.date")}: {dateOfShoot}
        </div>
        <div className={cn(styles.sing)}>
          {t("sign.ph")}: <img src={signPh} alt="" />
        </div>
        <div className={cn(styles.sing)}>
          {t("sign.md")}: <img src={signMd} alt="" />
        </div>
      </div>

      <div className={cn(styles.btn)}>
        <button
          className={cn(styles.hide_on_save, styles2.btn)}
          onClick={savePageAsImage}
        >
          {t("main.save")}
        </button>
      </div>
    </div>
  );
};

export default MainPage;
