import Carousel from "react-multi-carousel";
import * as Const from "../../../utils/Const";
import { Component } from "react";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
export default function HomeBanner({homeBannerImages = []}){
    return (
      <div className="nail-slider" style={{ marginTop: 68 }}>
        <Carousel
          responsive={Const.carouselResponsive}
          className="main-slider"
          infinite={true}
          // autoPlay={true}
          // autoPlaySpeed={2000}
          >
          {homeBannerImages.map((item)=> renderItem(item))}
        </Carousel>
      </div>
    );
  }

const renderItem = (item) => {
    return (
      <div key={item.index}>
        <div
          className="slide"
          style={{
            backgroundImage: `url(${item.imageUrl})`,
          }}
        >
          <div className="content">
            <span className="text-primary">NailCare</span>
            <h2 className="title">
              Experience <br />
              In Nail Care
            </h2>
            <h4 className="sub-title">
              Incredible Nail Designs &amp; Special Promotions
            </h4>
            <Link href="/about-us">
              <a className="btn">
                More About Us
              </a>
            </Link>
            <Link href="#">
              <a
                className="btn black"
              >
                Appointment
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

