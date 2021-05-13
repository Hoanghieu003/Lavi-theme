import Carousel from "react-multi-carousel";
import * as Const from "../../../utils/Const";
import { Component } from "react";
import "react-multi-carousel/lib/styles.css";
import { SRLWrapper } from 'simple-react-lightbox';

export default function Portfolio ({portfolioItems = []}) {
    return (
        <div className="section-full section-splr">
            <Carousel responsive={Const.portfolioCarouselResponsive} className="portfolio-carousel"  infinite={true}>
                    {portfolioItems.map((item) => renderItem(item))}
            </Carousel>
        </div>

    );
  }
  const renderItem = (item) => {
        return(
                <div className="item" key = {item.index}>
                    <div className="dlab-box portfolio-bx style2">
                        <div className="dlab-media dlab-img-overlay1 dlab-img-effect primary">
                            <a href="#!" ><img src={item.imageUrl} alt=""></img></a>
                            <div className="overlay-bx">
                                <span data-exthumbimage={item.imageUrl} data-src={item.imageUrl} className="icon-bx-xs ti-zoom-in mfp-link check-km" title="Modern Hotel in London"></span>
                                <div className="overlay-icon align-b text-white">
                                    <div className="text-white text-left port-box">
                                        <h2 className="title"><a href="https://lavi.dexignzone.com/xhtml/error-404.html">{item.title}</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
  }

