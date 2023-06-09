import cn from "classnames";
import styles from "./Sign.module.css";
import styles2 from "../../index.module.css";
import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sign = ({ signPhChange, signMdChange }) => {
  const [signaturePh, setSignaturePh] = useState(null);
  const [signatureMd, setSignatureMd] = useState(null);
  const canvasRefPh = useRef(null);
  const canvasRefMd = useRef(null);

  const { t } = useTranslation();

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
      <div className={cn(styles2.label)}>
        <h2>{t("sign.ph")}</h2>
      </div>
      <div className={cn(styles.sign_div)}>
        <SignatureCanvas
          canvasProps={{ width: 500, height: 400 }}
          penColor="black"
          ref={canvasRefPh}
          onEnd={handleSavePh}
        />
      </div>

      <button onClick={handleClearPh} className={cn(styles.sign_btn)}>
        {t("sign.clear")}
      </button>
      <div className={cn(styles2.label)}>
        <h2>{t("sign.md")}</h2>
      </div>
      <div className={cn(styles.sign_div)}>
        <SignatureCanvas
          canvasProps={{ width: 500, height: 400 }}
          penColor="black"
          ref={canvasRefMd}
          onEnd={handleSaveMd}
        />
      </div>
      <button onClick={handleClearMd} className={cn(styles.sign_btn)}>
        {t("sign.clear")}
      </button>
      <Link
        to={{
          pathname: "/mainpage",
          state: {
            signPhChange,
            signMdChange,
          },
        }}
        className={cn(styles2.btn)}
        onClick={handleClick}
      >
        {t("sign.next")}
      </Link>
    </div>
  );
};

export default Sign;
