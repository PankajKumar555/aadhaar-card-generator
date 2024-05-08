import React from "react";
import Lion from "../../assets/lion.png";
import Logo from "../../assets/aadhaar-logo.jpg";
import Dummy from "../../assets/dummy.png";
import QrCode from "../../assets/qrcode.jpg";
import "./index.css";

const AadharCard = (formData) => {
  const data = formData && formData.formData.formData;

  const random = Math.floor(Math.random() * 1000000000000).toString();
  const formattedRandom = random.replace(/(\d{4})/g, "$1 ");

  return (
    <>
      <div className="front-container" style={{ marginTop: "0.5rem" }}>
        <div className="front-nav">
          <img src={Lion} alt="lion" />
          <div className="front-nav-txt">
            <p>भारत सरकार</p>
            <p>Government of India</p>
          </div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="front-details-container">
          <div className="front-details">
            <img src={Dummy} alt="Dummy" />
            <div>
              <p>
                <b>Name</b> : {data.name}
              </p>
              <p>
                <b>DOB</b> : {data.dob}{" "}
              </p>
              <p>
                <b>Contact</b> : {data.contact}
              </p>
            </div>
          </div>
          <img src={QrCode} alt="QrCode" className="front-qrcode" />
        </div>
        <div className="front-footer">
          <h2>{formattedRandom}</h2>
          <hr />
          <h2>
            मेरा <span>आधार,</span> मेरी पहचान
          </h2>
        </div>
      </div>
      {/* back */}
      <div className="front-container" style={{ marginTop: "0.5rem" }}>
        <div className="front-nav">
          <img src={Lion} alt="lion" />
          <div className="front-nav-txt">
            <p>भारत सरकार</p>
            <p>Government of India</p>
          </div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="back-details-container">
          <div className="back-details">
            <p>
              <b>Address:</b>
              <br /> {data.address}
            </p>
          </div>
          <img src={QrCode} alt="QrCode" className="back-qrcode" />
        </div>
        <div className="front-footer">
          <h2>{formattedRandom}</h2>
          <hr />
          <h2>
            मेरा <span>आधार,</span> मेरी पहचान
          </h2>
        </div>
      </div>
    </>
  );
};

export default AadharCard;
