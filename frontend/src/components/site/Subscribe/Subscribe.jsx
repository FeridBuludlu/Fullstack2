import React from "react";
import "./Subscribe.css";
const subscribe = () => {
  return (
    <div className="subscribe_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="subscribe_area_text text-center">
              <h5>Join Our Newsletter</h5>
              <h2>
                Subscribe to get <br /> Updated with new <br /> offers
              </h2>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <a
                    href="#"
                    className="input-group-text btn_2"
                    id="basic-addon2"
                  >
                    subscribe now
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

export default subscribe;
