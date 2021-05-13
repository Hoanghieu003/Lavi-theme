import React, { useEffect, useState } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import Gallery from "react-photo-gallery";
import TagButton from "../../../components/TagButton"

const options = {
	// settings: {
	// 	overlayColor: 'rgb(25, 136, 124)',
	// 	autoplaySpeed: 1500,
	// 	transitionSpeed: 900
	// },
	// buttons: {
	// 	backgroundColor: 'red',
	// 	iconColor: 'rgba(126, 172, 139, 0.8)'
	// },
	// caption: {
	// 	captionColor: '#a6cfa5',
	// 	captionFontFamily: 'Raleway, sans-serif',
	// 	captionFontWeight: '300',
	// 	captionTextTransform: 'uppercase'
	// },
	// coloringgressBar: {
	// 	height: '20px',
	// 	fillColor: 'blue',
	// 	backgroundColor: 'white'
	// }
};
export default function gallerySession({galleryItems = [], categories = []}) {
    const [category, setCategory] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

    useEffect(
		() => {
			category === 'all' ? setFilteredImages(galleryItems) : setFilteredImages(galleryItems.filter(image => image.category === category));
		},
		[category]
	);

    return (
		<div className="section-full content-inner bg-gray">
			<div className="container">

			<div className="site-filters style1 clearfix center">
			<ul className="filters" data-toggle="buttons">
					<li className="btn">
						<TagButton name="all" categoryActive={category === 'all' ? true : false} handleSetCategory={setCategory} />
					</li>
				{categories.map((item) => (
					<li className="btn" key={item.index}>
						<TagButton name={item.categoryName} categoryActive={category === item.categoryName ? true : false} handleSetCategory={setCategory} />
					</li>
				))}
			</ul>
			</div>
			<SRLWrapper options={options}>
				<div className="container">
					<Gallery photos={filteredImages} />
				</div>
			</SRLWrapper>
			</div>
        </div>
    );
}
