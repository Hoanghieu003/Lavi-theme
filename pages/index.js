import React from 'react';
import HomeBanner from "./home/components/homeBanner";
import BestPricing from "./home/components/bestPricing";
import Portfolio from "./home/components/portfolio"
import Services from "./home/components/services"
import Team from "./home/components/team";
import Articles from "./home/components/articles";
import {getHomeBannerImages, getBestPriceItems, getPortfolioItems, getHomeServices, getStylists, getArticles} from '../services/homeServices'
import {getBeautyServices} from "../services/ourServicesPageServices"
import {mockServices} from "../services/mockServices"
import SimpleReactLightbox from 'simple-react-lightbox';

class Home extends React.Component {
  state = {
    loading: true,
    // primaryColor: '#983591',
    // secondaryColor: '#913591'
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({loading:false})
    }, 1000)
    // document.documentElement.style.setProperty('--color-primary',this.state.primaryColor);
    // document.documentElement.style.setProperty('--color-secondry',this.state.secondaryColor);
  }
  // changeTheme(e){
  //   this.setState({color: event.target.value});
  //   document.documentElement.style.setProperty('--color-primary',this.state.color);
  // }
  render(){
    // if (!this.props.homeBannerImages){
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
        <div id="bg" className = "font-poppins title-vidaloka">
          <div className="page-wraper bg-gray">
            {/* {props.homeBannerImages.map(a=> {
              return (<li>{a.index}</li>)
            })} */}
            <HomeBanner homeBannerImages = {this.props.homeBannerImages} />
            <BestPricing bestPriceItems = {this.props.bestPriceItems}/>
            <Portfolio portfolioItems = {this.props.portfolioItems} />
            {/* <input
              className=""
              type="color"
              defaultValue={this.state.color}
              onChange={(e) => this.changeTheme(e)}
            /> */}
            <Services services= {this.props.services} />
            <Team stylists = {this.props.stylists}/>
            <Articles articles = {this.props.articles} />
          </div>
        </div>
    )
  }
}
export async function getServerSideProps(context) {
  const homeBannerImages = getHomeBannerImages();
  const bestPriceItems =  mockServices.filter((item) => {return item.price <=  35} )
  const portfolioItems = getPortfolioItems();
  const services = mockServices.filter((item) => {return item.featured === true});
  // const services = getHomeServices();
  const stylists = getStylists();
  const articles = getArticles();
  return {
    props: {
      homeBannerImages,
      bestPriceItems,
      portfolioItems,
      services,
      stylists,
      articles,
    },
  }
}
export default Home;
