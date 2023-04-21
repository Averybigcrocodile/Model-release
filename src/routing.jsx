import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Start from "./components/start/Start";
import Photosession from "./components/photosession/Photosession";
import Photographer from "./components/photographer/Photographer";
import Model from "./components/model/Model";
import Sign from "./components/sign/Sign";
import MyRelease from "./components/form/MyRelease";
import MainPage from "./components/main/MainPage";
import Info from "./components/info/Info";
import { useState } from "react";

const Routing = () => {
  // фотограф
  const [namePh, setNamePh] = useState("");
  const [phonePh, setPhonePh] = useState("");
  // модель
  const [photoMd, setPhotoMd] = useState("");
  const [nameMd, setNameMd] = useState("");
  const [dateMd, setDateMd] = useState("");
  const [cityMd, setCityMd] = useState("");
  const [adressMd, setAdressMd] = useState("");
  const [passportMd, setPassportMd] = useState("");
  const [phoneMd, setPhoneMd] = useState("");
  // фотосесія
  const [nameOfShoot, setNameOfShoot] = useState("");
  const [dateOfShoot, setDateOfShoot] = useState("");
  const [placeOfShoot, setPlaceOfShoot] = useState("");
  // підписи
  const [signPh, setSingPh] = useState("");
  const [signMd, setSingMd] = useState("");
  // Інформація про фотосесію
  const handleNameOfShootChange = (value) => {
    setNameOfShoot(value);
  };
  const handleDateOfShootChnage = (value) => {
    setDateOfShoot(value);
  };
  const handlePlaceOfShootChange = (value) => {
    setPlaceOfShoot(value);
  };
  // Інформація про фотографа
  const handleNamePhChange = (value) => {
    setNamePh(value);
  };
  const handlePhonePhChange = (value) => {
    setPhonePh(value);
  };
  //Інформація про модель
  const handlePhotoMdChange = (value) => {
    setPhotoMd(value);
  };
  const handleNameMdChange = (value) => {
    setNameMd(value);
  };
  const handleDateMdChange = (value) => {
    setDateMd(value);
  };
  const handleCityMdChange = (value) => {
    setCityMd(value);
  };
  const handleAdressMdChange = (value) => {
    setAdressMd(value);
  };
  const handlePassportMdChange = (value) => {
    setPassportMd(value);
  };
  const handlePhoneMdChange = (value) => {
    setPhoneMd(value);
  };
  // підпис
  const handleSignPhChage = (value) => {
    setSingPh(value);
  };
  const handleSignMdChage = (value) => {
    setSingMd(value);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/start" element={<Start />} />
        <Route
          path="/photosession"
          element={
            <Photosession
              nameOfShootChange={handleNameOfShootChange}
              dateOfShootChange={handleDateOfShootChnage}
              placeOfShootChange={handlePlaceOfShootChange}
            />
          }
        />
        <Route
          path="/photographer"
          element={
            <Photographer
              nameChange={handleNamePhChange}
              phoneChange={handlePhonePhChange}
            />
          }
        />
        <Route
          path="/model"
          element={
            <Model
              photoChange={handlePhotoMdChange}
              nameChange={handleNameMdChange}
              dateOfBirthChange={handleDateMdChange}
              cityChange={handleCityMdChange}
              adressChange={handleAdressMdChange}
              passportChange={handlePassportMdChange}
              phoneChange={handlePhoneMdChange}
            />
          }
        />
        <Route path="/info" element={<Info />} />
        <Route
          path="/sign"
          element={
            <Sign
              signPhChange={handleSignPhChage}
              signMdChange={handleSignMdChage}
            />
          }
        />
        <Route
          path="/myrelease"
          element={<MyRelease namePh={namePh} nameMd={nameMd} />}
        />
        <Route
          path="/mainpage"
          element={
            <MainPage
              nameOfShoot={nameOfShoot}
              dateOfShoot={dateOfShoot}
              placeOfShoot={placeOfShoot}
              namePh={namePh}
              phonePh={phonePh}
              photoMd={photoMd}
              nameMd={nameMd}
              dateOfBirthMd={dateMd}
              cityMd={cityMd}
              adressMd={adressMd}
              passportMd={passportMd}
              phoneMd={phoneMd}
              signPh={signPh}
              signMd={signMd}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
