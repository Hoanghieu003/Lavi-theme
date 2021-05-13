import React, { Component } from 'react'
import Link from 'next/link'


export default function Services({services = []}){
        return (
        <div className="section-full content-inner bg-white">
			<div className="container">
				<div className="section-head text-center">
					<span className="main-title text-primary">Best Services</span>
					<h3 className="title">Our Services</h3>
				</div>
				<div className="row">
				{services.map((item) => renderItems(item))}
				</div>
			</div>
		</div>
        )
    }
	const renderItems = (item) => {
		return (
		<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={item.index}>
			<div className="service-box style1 m-b30">
				<div className="icon-lg">
					<span className="icon-cell"><i className={item.icon}></i></span>
				</div>
				<h4 className="title">{item.title}</h4>
				<p>{item.description}</p>
				<Link href="/our-services">
				<a className="btn-link">Book Now <i className="fa fa-long-arrow-right"></i></a>
				</Link>
			</div>
		</div>
		)
	}

