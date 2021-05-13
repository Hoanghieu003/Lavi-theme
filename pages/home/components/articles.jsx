import Carousel from "react-multi-carousel";
import * as Const from "../../../utils/Const";
import { Component } from "react";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link'

export default function Articles({articles = []}){
    return (
        <div className="section-full content-inner-2">
			<div className="container">
				<div className="section-head salon-head text-center" data-content="Articles">
					<h6 className="sub-title">From Our Blog</h6>
					<h2 className="title">Latest Articles & <i className="text-primary">News</i></h2>
				</div>
				<Carousel responsive={Const.servicesCarouselResponsive} className="blog-carousel" infinite={true}>
					{articles.map((item) => renderItem(item))}
				</Carousel>
			</div>
		</div>
    );
  }
 const renderItem = (item) => {
		return(
			<div className="item" key = {item.index}>
				<div className="blog-post blog-grid nail-post">
					<div className="dlab-post-media dlab-img-effect">
						<Link href="/gallery">
							<a><img src={item.imageUrl} alt=""/></a>
						</Link>
					</div>
					<div className="dlab-info">
						<div className="dlab-post-title ">
							<h4 className="post-title"><a href="#">{item.title}</a></h4>
						</div>
						<div className="dlab-post-text">
							<p>{item.description}</p>
						</div>
						<div className="dlab-post-meta">
							<ul>
								<li className="post-date"><i className="las la-calendar-alt"></i> <strong>17 Mar </strong> <span>20</span> </li>
								<li className="post-author"><i className="las la-user-alt"></i> by <a href="#!"> Julia </a></li>
								<li className="post-comment"><i className="las la-comment"></i> <a href="#!" className="comments-link"> 1K</a> </li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
  }

