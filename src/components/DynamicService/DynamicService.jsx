import React, { useEffect, useState } from "react";
import "./DynamicService.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Card, Calendar } from "react-rainbow-components";

const DynamicService = () => {
  const serviceData = useLoaderData();

  const { title, img, description, docName, disabledDays, docProfile } =
    serviceData;

  // calerdar initial settings
  const [initialState, setInitialState] = useState({
    date: new Date(),
  });
  const [selectedDate, setSelectedDate] = useState(
    initialState.date.toLocaleString("en-US", { month: "short" }) +
      " " +
      initialState.date.getDate()
  );

  const calendarContainerStyles = {
    width: "29rem",
    height: "35rem",
  };

  const disabledServiceDays = disabledDays.map(
    (dayNum) =>
      new Date(new Date().getTime() + parseInt(dayNum) * 24 * 60 * 60 * 1000)
  );

  useEffect(() => {
    const day = initialState.date.getDate();
    const month = initialState.date.toLocaleString("en-US", { month: "short" });
    const year = initialState.date.getFullYear();

    setSelectedDate(month + " " + day + ", " + year);
  }, [initialState]);

  // route change on confirm
  const navigate = useNavigate();
  const handleConfirm = () => {
    navigate("/success");
  };

  return (
    <div className="dynamic-service">
      <div className="container py-5">
        <div className="section-header">
          <h1 className="section-title fs-1 fw-bold">
            Select a time and visit dietitian
          </h1>
          <p className="fw-bold text-muted fs-5">
            Use calendar to choose the best time for your appointment
          </p>
        </div>

        <div
          className="calendar-doc-container mt-5 mx-auto flex-center"
          style={{ width: "90%" }}
        >
          {/* left side */}
          <div
            className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium"
            style={{ marginRight: "90px" }}
          >
            <Card
              style={calendarContainerStyles}
              className="rainbow-p-around_large"
            >
              <Calendar
                id="calendar-5"
                value={initialState.date}
                minDate={new Date()}
                onChange={(value) => setInitialState({ date: value })}
                disabledDays={disabledServiceDays}
              />
            </Card>
          </div>

          {/* right side */}
          <div>
            <h4 className="fs-3 fw-bold">
              Appointment for {selectedDate} (60 minutes)
            </h4>

            <div
              className="flex-center border border-2 p-2 mt-3"
              style={{ borderRadius: "20px" }}
            >
              <img src={img} alt="" />
              <div className="ms-3">
                <h4 className="fw-bold">{title}</h4>
                <p>{description}</p>
              </div>
            </div>

            <div className="flex-start my-5">
              <img
                src={docProfile}
                alt=""
                className="img-thumbnail"
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
              <div>
                <h4 className="fs-3 fw-bold ms-3 mb-0">{docName}</h4>
                <p className="ms-3 mb-0 fw-bold text-muted">MBBS, FCPS, D.O.</p>
              </div>
            </div>

            <button className="appoint-time">3:30 PM</button>
            <button className="appoint-time ms-4">4:30 PM</button>

            <p className="mt-4 text-muted">* All in Bangladesh Standard Time</p>

            <button className="confirm-btn" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicService;
