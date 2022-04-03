import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import "./carousel.scss";
import { data, sliderData } from "./data";

const Carousel = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Slider
        autoplay
        autoplaySpeed={2000}
        dots
        initialSlide={2}
        infinite
        customPaging={(i) => {
          return (
            <div>
              <img
                src={data[i]}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >

        {sliderData.map((item) => (
          <div>
            <img src={item.image} alt="" style={{ width: "100%", height: "70vh" }} />
            <div  className="content">
                <h2>{item.heading}</h2>
                <p>{item.desc}</p>
                <hr/>
            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default Carousel;
