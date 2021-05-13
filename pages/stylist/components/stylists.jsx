import React, { Component } from 'react'

export default function Stylists ({stylists = []}) {
        return (
            <div className="section-full content-inner bg-gray">
                <div className="container">
                    <div className="row">
                    {stylists.map((item) => renderStylists(item))}
                    </div>
                </div>
            </div>
        )
    }
const renderStylists= (item) => {
        return(
            <div className="col-lg-4 col-md-6" key={item.index}>
                <div className="dlab-box dlab-team m-b50">
                    <div className="dlab-media dlab-img-effect">
                        <img src={item.imgUrl} alt=""/>
                        <div className="overlay-bx">
                            <div className="overlay-icon">
                                <ul className="dlab-social-icon">
                                    <li><a className="fa fa-facebook" href="#!"></a></li>
                                    <li><a className="fa fa-twitter" href="#!"></a></li>
                                    <li><a className="fa fa-linkedin" href="#!"></a></li>
                                    <li><a className="fa fa-pinterest" href="#!"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dlab-info">
                        <h3 className="dlab-title"><a href="#!">{item.stylistName}</a></h3>
                        <span className="dlab-position">{item.role}</span>
                    </div>
                </div>
            </div>
        )
    }

