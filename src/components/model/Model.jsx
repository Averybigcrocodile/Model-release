import cn from "classnames";
import styles from "./Model.module.css";
import styles2 from "../../index.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const [img, setImg] = useState(null);
  const { t } = useTranslation();

  const handleClick = () => {
    photoChange(img);
    nameChange(name);
    dateOfBirthChange(dateOfBirth);
    cityChange(city);
    adressChange(adress);
    passportChange(passport);
    phoneChange(phone);
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  const handleCameraClick = () => {
    const video = document.createElement("video");
    video.style.width = "200px";

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
        };
      })
      .catch((err) => {
        console.log(err);
      });

    const canvas = document.createElement("canvas");

    const takePhoto = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);

      const imgData = canvas.toDataURL();
      setImg(imgData);

      video.srcObject.getTracks().forEach((track) => track.stop());
    };

    const captureBtn = document.createElement("button");
    captureBtn.innerText = "Click";
    captureBtn.onclick = takePhoto;

    const cameraContainer = document.createElement("div");
    cameraContainer.appendChild(video);
    cameraContainer.appendChild(captureBtn);
    cameraContainer.style.display = "flex";
    cameraContainer.style.flexDirection = "column";

    const modal = document.createElement("div");
    modal.classList.add(styles2.modal);
    modal.onclick = () => modal.remove();

    modal.appendChild(cameraContainer);

    document.querySelector(`.${styles.addPhoto}`).appendChild(modal);
  };

  return (
    <div>
      <div className={cn(styles2.label)}>
        <h2>{t("model.info")}</h2>
      </div>

      <div className={cn(styles.model)}>
        <div className={cn(styles2.inputs)}>
          {img ? (
            <div className={cn(styles.preview)}>
              <img src={img} alt="preview" />
            </div>
          ) : (
            <div className={cn(styles.addPhoto)}>
              <input
                type="file"
                accept="img/*"
                onChange={handleImgChange}
                id="input__file"
                className={cn(styles.input)}
              />
              <div>
                <label htmlFor="input__file" className={cn(styles.input_label)}>
                  {t("model.addphoto")}
                </label>
              </div>
              <div onClick={handleCameraClick} className={cn(styles.takePhoto)}>
                {t("model.photo")}
              </div>
            </div>
          )}
        </div>

        <div className={cn(styles2.inputs)}>
          <span>{t("model.name")}:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={cn(styles2.inputs)}>
          <span>{t("model.date")}:</span>
          <input
            type="text"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className={cn(styles2.inputs)}>
          <span>{t("model.city")}:</span>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className={cn(styles2.inputs)}>
          <span>{t("model.adress")}:</span>
          <input
            type="text"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div className={cn(styles2.inputs)}>
          <span>{t("model.passport")}:</span>
          <input
            type="text"
            value={passport}
            onChange={(e) => setPassport(e.target.value)}
          />
        </div>
        <div className={cn(styles2.inputs)}>
          <span>{t("model.phone")}:</span>
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
          className={cn(styles2.btn)}
          onClick={handleClick}
        >
          {t("model.next")}
        </Link>
      </div>
    </div>
  );
};

export default Model;
