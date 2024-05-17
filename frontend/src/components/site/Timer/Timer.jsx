import React from "react";
import "./Timer.css";
const Timer = () => {
  return (
    <div className="timer_section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div className="offer_img">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="offer_text">
              <h2>Weekly Sale on 60% Off All Products</h2>
              <div className="date_countdown">
                <div className="timer">
                  <div id="days" className="date">
                    <span>Days</span> -1694
                  </div>
                  <div id="hours" className="date">
                    <span>Hours</span> 08
                  </div>
                  <div id="minutes" className="date">
                    <span>Minutes</span> 39
                  </div>
                  <div id="seconds" className="date">
                    <span>Seconds</span> 42
                  </div>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <a href="#" className="input-group-text btn_2" id="basic-addon2">
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
