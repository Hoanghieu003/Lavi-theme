import { Component } from "react";

export default function ServiceDetailsSession ({allServicesDetails = []}) {
    return (
        <div className="section-full content-inner bg-white">
			<div className="container">
				<div className="row m-b30">
					<div className="col-lg-12 services-details">
						<div className="dlab-media m-b30">
							<img src="/images/our-services/pic1.jpg" alt=""/>
						</div>
						<h2 className="title">{allServicesDetails[0]?.title}</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="service-box style1 m-b30">
							<div className="icon-lg">
								<span className="icon-cell"><i className="flaticon-woman"></i></span> 
							</div>
							<h4 className="title">Body Treatments</h4>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry.</p>
							<a href="/our-services" className="btn-link text-primary">Book Now <i className="fa fa-long-arrow-right"></i></a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="service-box style1 m-b30">
							<div className="icon-lg"> 
								<span className="icon-cell"><i className="flaticon-mortar"></i></span> 
							</div>
							<h4 className="title">Aromatherapy</h4>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry.</p>
							<a href="/our-services" className="btn-link text-primary">Book Now <i className="fa fa-long-arrow-right"></i></a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="service-box style1 m-b30">
							<div className="icon-lg">
								<span className="icon-cell"><i className="flaticon-sauna-1"></i></span> 
							</div>
							<h4 className="title">Beauty & Clinic Service</h4>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry.</p>
							<a href="/our-services" className="btn-link text-primary">Book Now <i className="fa fa-long-arrow-right"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }

