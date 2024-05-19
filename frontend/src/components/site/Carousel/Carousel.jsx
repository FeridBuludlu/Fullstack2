import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card card-all">
                <img
                  className="card-img-top"
                  src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Quartz Belt Watch</h5>
                  <p className="card-text">
                  $150.00
                  </p>
                  <a href="#" className="Button">
                    Go Details +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card card-all">
                <img
                  className="card-img-top"
                  src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Quartz Belt Watch</h5>
                  <p className="card-text">
                  $150.00
                  </p>
                  <a href="#" className="button">
                  Go Details +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card card-all">
                <img
                  className="card-img-top"
                  src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Quartz Belt Watch</h5>
                  <p className="card-text">
                  $150.00
                  </p>
                  <a href="#" className="button">
                  Go Details +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card card-all">
                <img
                  className="card-img-top"
                  src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Quartz Belt Watch</h5>
                  <p className="card-text">
                  $150.00
                  </p>
                  <a href="#" className="button">
                  Go Details +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card card-all">
                <img
                  className="card-img-top"
                  src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Quartz Belt Watch</h5>
                  <p className="card-text">
                  $150.00
                  </p>
                  <a href="#" className="button">
                  Go Details +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card card-all">
                <img
                  className="card-img-top"
                  src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Quartz Belt Watch</h5>
                  <p className="card-text">
                  $150.00
                  </p>
                  <a href="#" className="button">
                  Go Details +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card card-all">
                <img
                  className="card-img-top"
                  src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Quartz Belt Watch</h5>
                  <p className="card-text">
                  $150.00
                  </p>
                  <a href="#" className="button">
                  Go Details +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card card-all">
                <img
                  className="card-img-top"
                  src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Quartz Belt Watch</h5>
                  <p className="card-text">
                  $150.00
                  </p>
                  <a href="#" className="button">
                  Go Details +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}

export default Carousel;
