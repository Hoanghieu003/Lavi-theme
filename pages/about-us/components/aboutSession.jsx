import React, { Component } from 'react'

export default function AboutSession () {
        return (
            <div className="section-full content-inner-2 bg-white">
                <div className="container">
                    <div className="row about-area">
                        <div className="col-xl-9">
                            <div className="about-img">
                                <div className="about-left">
                                    <h2>about</h2>
                                </div>
                                <img src="/images/our-services/pic1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-3 d-flex align-items-end">
                            <div className="about-content">
                                <h3 className="title">About Us</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                                <a href="/about-us" className="btn">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

