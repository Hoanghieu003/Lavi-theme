import { Component } from "react";

export default function BranchDetailsSession ({allBranchDetails = []}) {
    return (
			<div className="section-full content-inner-2 bg-white">
                <div className="container">
                    <div className="row about-area">
                        <div className="col-xl-9">
                            <div className="about-img">
                                <div className="about-left">
                                    <h2>about</h2>
                                </div>
                                <img src={allBranchDetails.imageUrl} alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-3 d-flex align-items-end">
                            <div className="about-content">
                                <h3 className="title">{allBranchDetails.city}</h3>
                                <p>{allBranchDetails.address}</p>
                                <a href="/about-us" className="btn">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }

