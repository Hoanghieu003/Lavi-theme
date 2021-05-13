import { Component } from "react";

export default function Banner () {
    return (
        <div className="dlab-bnr-inr overlay-black-light"
        style={{
          backgroundImage: "url(/images/banner/bnr1.jpg)",
        }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Services Details</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li><a href="/"><i className="fa fa-home"></i> Home </a></li>
                  <li>Services Details</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    );
  }

