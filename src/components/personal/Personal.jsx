import cn from "classnames";
import styles from "./Personal.module.css";

const Personal = ({
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
  return (
    <div className={cn(styles.personal__info)}>
      <div className={cn(styles.personal__info_block)}>
        <div className={cn(styles.personal__info_shoot)}>
          <div>Назва фотосесії: {nameOfShoot}</div>
          <div>Дата фотосесії: {dateOfShoot}</div>
          <div>Місце фотосесії: {placeOfShoot}</div>
        </div>
        <div className={cn(styles.personal__info_ph)}>
          <div>Фотограф: {namePh}</div>
          <div>Телефон: {phonePh}</div>
        </div>
      </div>
      <div className={cn(styles.personal__info_md)}>
        <div className={cn(styles.personal__photo)}>
          <img src={photoMd} alt="Фото моделі" />
        </div>
        <div>
          <div>Модель: {nameMd}</div>
          <div>Дата народження: {dateOfBirthMd}</div>
          <div>Місто: {cityMd}</div>
          <div>Адреса: {adressMd}</div>
          <div>Серія та номер паспорту: {passportMd}</div>
          <div>Телефон: {phoneMd}</div>
        </div>
      </div>
      <div className={cn(styles.date_and_sings)}>
        <div>Дата: {dateOfShoot}</div>
        <div className={cn(styles.sing)}>
          Підпис фотографа: <img src={signPh} alt="" />
        </div>
        <div className={cn(styles.sing)}>
          Підпис моделі: <img src={signMd} alt="" />
        </div>
      </div>
      <button>Зберегти</button>
    </div>
  );
};

export default Personal;
