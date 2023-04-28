import cn from "classnames";
import styles from "./MainPage.module.css";
import styles2 from "../../index.module.css";
import MyRelease from "../form/MyRelease";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

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
            <img src={photoMd} alt="Фото моделі" />
          </div>
          <div className={cn(styles.personal__md_info)}>
            <span>Модель: {nameMd}</span>
            <span>Дата народження: {dateOfBirthMd}</span>
            <span>Місто: {cityMd}</span>
            <span>Адреса: {adressMd}</span>
            <span>Серія та номер паспорту: {passportMd}</span>
            <span>Телефон: {phoneMd}</span>
          </div>
        </div>

        <div className={cn(styles.personal__info_shoot)}>
          <span>Назва фотосесії: {nameOfShoot}</span>
          <span>Дата фотосесії: {dateOfShoot}</span>
          <span>Місце фотосесії: {placeOfShoot}</span>
          <span>Фотограф: {namePh}</span>
          <span>Телефон: {phonePh}</span>
        </div>
      </div>

      <div className={cn(styles.date_and_sings)}>
        <div className={cn(styles.date)}>Дата: {dateOfShoot}</div>
        <div className={cn(styles.sing)}>
          Підпис фотографа: <img src={signPh} alt="" />
        </div>
        <div className={cn(styles.sing)}>
          Підпис моделі: <img src={signMd} alt="" />
        </div>
      </div>

      <div className={cn(styles.btn)}>
        <button
          className={cn(styles.hide_on_save, styles2.btn)}
          onClick={savePageAsImage}
        >
          Зберегти
        </button>
      </div>
    </div>
  );
};

export default MainPage;
