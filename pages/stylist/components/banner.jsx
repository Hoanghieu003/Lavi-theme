import React, { Component } from 'react'

export default function Banner () {
        return (
            <div>
                <div className="dlab-bnr-inr overlay-black-light"
                style={{backgroundImage:"url(/images/banner/bnr1.jpg)"}}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Our Team</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><a href="index.html"><i className="fa fa-home"></i> Home </a></li>
                                    <li>Our Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

