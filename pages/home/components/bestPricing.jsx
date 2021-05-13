import { Component } from "react";
import { SRLWrapper } from 'simple-react-lightbox';
import Link from 'next/link';

export default function BestPrice ({bestPriceItems = []}) {
    return (
      <div className="section-full content-inner bg-gray">
        <div className="container">
          <div
            className="section-head salon-head text-center text-bg-white"
            data-content="Pricing"
          >
            <h6 className="sub-title">Best Deal</h6>
            <h2 className="title">
              Special <i className="text-primary">Pricing</i>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="menu-box">
                <SRLWrapper>
                  <ul className="menu-list">
                    {bestPriceItems.map((item) => renderItem(item))}
                  </ul>
                </SRLWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const renderItem = (item) => {
    return(
      <li key={item.index}>
        <div className="item-left">
            <img src={item.imageUrl} alt="" />
          <Link href="/our-services">
            <a>
              <h4 className="title">{item.title}</h4>
            </a>
          </Link>
          <p className="description">{item.description}</p>
        </div>
        <div className="item-right">
          <h5 className="price">${item.price}</h5>
        </div>
      </li>
    )
  }

