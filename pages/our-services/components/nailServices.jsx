import { Component, useEffect, useState } from "react";
import TagButton from "../../../components/TagButton"
import Link from 'next/link'

export default function NailServices({services = [], categories = []}) {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: DATA,
  //     category: CATEGORY,
  //     chosenCategory: "",
  //     tag: 'all'
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange = (category) => {
  //   var filterByCategory = DATA.filter((item) => item.category === category);
  //   {category === "all" ? this.setState({ data: DATA }) : this.setState({ data: filterByCategory, chosenCategory: category }); }
  // };
  const [category, setCategory] = useState('all');
	const [filteredData, setFilteredData] = useState([]);

  useEffect(
		() => {
			category === 'all' ? setFilteredData(services) : setFilteredData(services.filter(services => services.categoryId === category));
		},
		[category]
	);

  return (
      <div className="section-full content-inner bg-gray" >
        <div className="container">
          {/* filter */}
          <div className="site-filters style1 clearfix center">
            <ul className="filters" data-toggle="buttons">
              <li className="btn">
                  <TagButton name="all" categoryActive={category === 'all' ? true : false} handleSetCategory={setCategory} />
              </li>
              {categories.map((item) => (
                <li className="btn" key={item.index}>
                    <TagButton name={item.categoryId} categoryActive={category === item.categoryId ? true : false} handleSetCategory={setCategory} />
              </li>
              ))}
            </ul>
          </div>
          {/* services */}
          <div className="row">
            {filteredData.map((item) => renderItems(item))}
          </div>
        </div>
      </div>
    );
}

const renderItems = (item) => {
  return(
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={item.index}>
      <div className="service-box dlab-box style2 zoom">
        <div className="dlab-media">
          <Link href={`/our-services/service/${item.id}`}>
            <a>
              <img src={item.imageUrl} alt="" style={{width: "100%", height: 200, resizeMode: 'stretch'}} />
            </a>
          </Link>
          </div>
          <div className="dlab-info">
            <h4 className="title">
              <Link href={`/our-services/service/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </h4>
            <p className="m-b0">{item.description}</p>
            <Link href={`/our-services/service/${item.id}`}>
              <a className="readmore" style={{fontSize: 18}}>
                ${item.price}
              </a>
            </Link>
        </div>
      </div>
    </div>
  )
}