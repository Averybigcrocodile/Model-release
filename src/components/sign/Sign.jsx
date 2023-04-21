import cn from "classnames";
import styles from "./Sign.module.css";
import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Link } from "react-router-dom";

const Sign = ({ signPhChange, signMdChange }) => {
  const [signaturePh, setSignaturePh] = useState(null);
  const [signatureMd, setSignatureMd] = useState(null);
  const canvasRefPh = useRef(null);
  const canvasRefMd = useRef(null);

  const handleClearPh = () => {
    canvasRefPh.current.clear();
    setSignaturePh(null);
  };

  const handleClearMd = () => {
    canvasRefMd.current.clear();
    setSignatureMd(null);
  };

  const handleSavePh = () => {
    const dataURL = canvasRefPh.current.toDataURL();
    setSignaturePh(dataURL);
  };
  const handleSaveMd = () => {
    const dataURL = canvasRefMd.current.toDataURL();
    setSignatureMd(dataURL);
  };

  const handleClick = () => {
    signPhChange(signaturePh);
    signMdChange(signatureMd);
  };

  return (
    <div className={cn(styles.sign)}>
      <h2>Підпис фотографа:</h2>
      <SignatureCanvas
        canvasProps={{ width: 500, height: 200 }}
        penColor="black"
        ref={canvasRefPh}
        onEnd={handleSavePh}
      />
      <button onClick={handleClearPh} className={cn(styles.sign_btn)}>
        Clear
      </button>
      <h2>Підпис моделі:</h2>
      <SignatureCanvas
        canvasProps={{ width: 500, height: 200 }}
        penColor="black"
        ref={canvasRefMd}
        onEnd={handleSaveMd}
      />
      <button onClick={handleClearMd} className={cn(styles.sign_btn)}>
        Clear
      </button>
      <Link
        to={{
          pathname: "/mainpage",
          state: {
            signPhChange,
            signMdChange,
          },
        }}
        className={cn(styles.sign_btn)}
        onClick={handleClick}
      >
        Далі
      </Link>
    </div>
  );
};

export default Sign;
