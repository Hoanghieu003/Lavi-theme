import React, { Component } from 'react'

export default function Owner () {
        return (
        <div className="section-full bg-img-fix content-inner-2 overlay-black-middle" 
        style={{
            backgroundImage: "url(/images/background/bg3.jpg)",
            }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="owner-profile text-center text-white">
							<div className="owner-profile-info">
								<div className="owner-profile-pic">
									<img src="/images/testimonials/pic2.jpg" alt=""/>
								</div>
								<div className="owner-profile-content">
									<h2 className="owner-name">Jonathan Blair</h2>
									<h5 className="owner-position text-white">Spa owner</h5>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius in eros.</p>
									<p className="owner-signature">Jonathan Blair</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        )
    }

