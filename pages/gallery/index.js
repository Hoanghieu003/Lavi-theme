import Layout from "../../components/Layout";
import React, { Component } from "react";
import Banner from "./components/banner";
import GallerySession from "./components/gallerySession";
import {getGalleryItems, getCategoryServices} from "../../services/galleryServices";
import SimpleReactLightbox from 'simple-react-lightbox';
class Gallery extends React.Component {
  state = {
    loading: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({loading:false})
    }, 1000)
  }
  render(){
    if (this.state.loading){
      return (
        <div id="loading-area">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
      )
    }
    return (
      <SimpleReactLightbox>
        <div className = "page-content">
          {/* <li>{this.props.stars}</li> */}
          <Banner/>
          <GallerySession galleryItems = {this.props.galleryItems} categories = {this.props.categories}/>
        </div>
     </SimpleReactLightbox>
    )
  }
}

export async function getServerSideProps(context) {
  const galleryItems = getGalleryItems();
  const categories = getCategoryServices();
  return {
    props: {
      galleryItems,
      categories,
    },
  }
}

export default Gallery;
