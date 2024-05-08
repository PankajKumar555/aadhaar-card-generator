import React, { useState } from "react";
import AadharCard from "../aadhar-card/AadharCard";
import "./index.css";

const AadhaarCardForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    contact: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData && formData.contact && formData.contact.length === 10) {
      setFormData({
        formData,
      });
      setIsRegistered(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {isRegistered ? (
        <AadharCard formData={formData} />
      ) : (
        <div className="aadhaar-form-container">
          <h3 className="aadhaar-form-heading">Generate New Aadhaar Card</h3>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                max="9999-12-31"
                min="1000-01-01"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact:</label>
              <input
                type="number"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            {error ? (
              <p
                style={{
                  textAlign: "center",
                  color: "red",
                  marginBottom: "5px",
                }}
              >
                This is not valid mobile number
              </p>
            ) : (
              ""
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AadhaarCardForm;
