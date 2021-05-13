import Carousel from "react-multi-carousel";
import * as Const from "../../../utils/Const";
import { Component } from "react";
import "react-multi-carousel/lib/styles.css";


export default function Services ({services = []}) {
    return (
        <div className="section-full content-inner">
            <div className="container">
                <div className="section-head salon-head text-center" data-content="Services">
                    <h6 className="sub-title">Services</h6>
                    <h2 className="title">Our <i className="text-primary">Services</i></h2>
                </div>
                <Carousel responsive={Const.servicesCarouselResponsive} className="blog-carousel" infinite={true}>
                    {services.map((item) => renderItem(item))}
                </Carousel>
            </div>
        </div>
    );
  }
  const renderItem = (item) => {
      return(
        <div className="item" key = {item.index}>
        <div className="dlab-box nail-service m-b30">
            <div className="dlab-media dlab-img-overlay2 primary">
                <img src={item.imageUrl} alt=""/>
            </div>
            <div className="dlab-info">
                <h3 className="dlab-title"><a href="/our-services">{item.title}</a></h3>
                <p>{item.description}</p>
                <a href="/our-services" className="btn">Learn More</a>
            </div>
        </div>
    </div>
      )
  }

