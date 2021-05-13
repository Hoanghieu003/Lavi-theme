import Carousel from "react-multi-carousel";
import * as Const from "../../../utils/Const";
import { Component } from "react";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';

export default function Team ({stylists = []}) {
    return (
		<div className="section-full bg-white content-inner-2 section-splr"
        style = {{
            backgroundImage:" url(images/background/bg9.jpg)", resize:"cover", position: "top"}}>
			<div className="container">
				<div className="section-head salon-head text-center" data-content="Team">
					<h6 className="sub-title">Choose best for you</h6>
					<h2 className="title">Our professional <i className="text-primary">team</i></h2>
				</div>
				<Carousel responsive={Const.teamCarouselResponsive} className="team-carousel" infinite={true}>
					{stylists.map((item) => renderItem(item))}
				</Carousel>
			</div>
		</div>
    );
  }
  const renderItem = (item) => {
	return(
		<div className="item" key = {item.index}>
			<div className="dlab-box dlab-team">
				<div className="dlab-media dlab-img-effect">
					<img src={item.imageUrl} alt=""/>
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
					<h3 className="dlab-title">
						<Link  href="/stylist">
							<a>{item.name}</a>
						</Link>
					</h3>
					<span className="dlab-position">{item.role}</span>
				</div>
			</div>
		</div>
	)
  }

