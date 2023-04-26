import cn from "classnames";
import styles from "./Model.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Model = ({
  photoChange,
  nameChange,
  dateOfBirthChange,
  cityChange,
  adressChange,
  passportChange,
  phoneChange,
}) => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [passport, setPassport] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    photoChange(img);
    nameChange(name);
    dateOfBirthChange(dateOfBirth);
    cityChange(city);
    adressChange(adress);
    passportChange(passport);
    phoneChange(phone);
  };
  // Фото
  const [img, setImg] = useState(null);
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  return (
    <div className={cn(styles.model)}>
      <h2>Інформація про модель</h2>
      <div className={cn(styles.inputs)}>
        <span>Завантажити фото:</span>
        <input
          type="file"
          accept="img/*"
          onChange={handleImgChange}
          id="input__file"
          className={cn(styles.input, styles.input__file)}
        />
      </div>
      <div className={cn(styles.inputs)}>
        <span>Ім'я та прізвище:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={cn(styles.inputs)}>
        <span>Дата народження:</span>
        <input
          type="text"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <div className={cn(styles.inputs)}>
        <span>Місто:</span>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className={cn(styles.inputs)}>
        <span>Адреса:</span>
        <input
          type="text"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
      </div>
      <div className={cn(styles.inputs)}>
        <span>Серія та номер паспорту:</span>
        <input
          type="text"
          value={passport}
          onChange={(e) => setPassport(e.target.value)}
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
          pathname: "/info",
          state: {
            photoChange,
            nameChange,
            dateOfBirthChange,
            cityChange,
            adressChange,
            passportChange,
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

export default Model;
