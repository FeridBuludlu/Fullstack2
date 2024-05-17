import React from "react";
import "./Featured.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Featured = () => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section_tittle text-center">
            <h2>Featured Category</h2>
          </div>
        </div>
      </div>
      <div class="row  align-items-center justify-content-between">
        <div class="col-lg-7 col-sm-6">
          <div class="single_feature_post_text">
            <p>Premium Quality</p>
            <h3>Latest foam Sofa</h3>
            <a href="#" class="feature_btn">
              EXPLORE NOW <i class="fas fa-play"></i>
            </a>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png.webp"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-5 col-sm-6">
          <div class="single_feature_post_text">
            <p>Premium Quality</p>
            <h3>Latest foam Sofa</h3>
            <a href="#" class="feature_btn">
              EXPLORE NOW <i class="fas fa-play"></i>
            </a>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-5 col-sm-6">
          <div class="single_feature_post_text">
            <p>Premium Quality</p>
            <h3>Latest foam Sofa</h3>
            <a href="#" class="feature_btn">
              EXPLORE NOW <i class="fas fa-play"></i>
            </a>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png.webp"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-7 col-sm-6">
          <div class="single_feature_post_text">
            <p>Premium Quality</p>
            <h3>Latest foam Sofa</h3>
            <a href="#" class="feature_btn">
              EXPLORE NOW <i class="fas fa-play"></i>
            </a>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_4.png.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
