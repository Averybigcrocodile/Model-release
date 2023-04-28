import cn from "classnames";
import styles from "./Model.module.css";
import styles2 from "../../index.module.css";
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
  const [img, setImg] = useState(null);

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
    captureBtn.innerText = "Зробити фото";
    captureBtn.onclick = takePhoto;

    const cameraContainer = document.createElement("div");
    cameraContainer.appendChild(video);
    cameraContainer.appendChild(captureBtn);

    const modal = document.createElement("div");
    modal.classList.add(styles2.modal);
    modal.onclick = () => modal.remove();
    modal.appendChild(cameraContainer);

    document.body.appendChild(modal);
  };

  return (
    <div>
      <div className={cn(styles2.label)}>
        <h2>Information about the model</h2>
      </div>

      <div className={cn(styles.model)}>
        <div className={cn(styles2.inputs, styles.inputs)}>
          {img ? (
            <div className={cn(styles.preview)}>
              <img src={img} alt="preview" />
            </div>
          ) : (
            <div className={cn(styles.addPhoto)}>
              <label htmlFor="input__file">
                <input
                  type="file"
                  accept="img/*"
                  onChange={handleImgChange}
                  id="input__file"
                  className={cn(styles.input)}
                />
              </label>
              <button onClick={handleCameraClick}>Take a photo</button>
            </div>
          )}
        </div>

        <div className={cn(styles2.inputs)}>
          <span>Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={cn(styles2.inputs)}>
          <span>Date of birth:</span>
          <input
            type="text"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className={cn(styles2.inputs)}>
          <span>City:</span>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className={cn(styles2.inputs)}>
          <span>Adress:</span>
          <input
            type="text"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div className={cn(styles2.inputs)}>
          <span>Passport series and number:</span>
          <input
            type="text"
            value={passport}
            onChange={(e) => setPassport(e.target.value)}
          />
        </div>
        <div className={cn(styles2.inputs)}>
          <span>Phone:</span>
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
          Next
        </Link>
      </div>
    </div>
  );
};

export default Model;
