import { Component } from "react";
import Banner from "./components/banner";
import NailServices from "./components/nailServices";
import {getBeautyServices, getCategoryServices} from "../../services/ourServicesPageServices"
import {mockServices, categories} from "../../services/mockServices"
import {getAllServicesId, getAllServicesDetails} from "../../services/ourServicesPageServices"

class OurServices extends Component {
  state = {
    loading: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({loading:false})
    }, 1000)
  }
  render() {
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
      <div className = "page-content">
        <Banner/>
        <NailServices services={this.props.services} categories={this.props.listCategories}/>
      </div>
    );
  }
}
export async function getServerSideProps(context) {
  // const services = getBeautyServices();
  // const categories = getCategoryServices();
  const services = mockServices;
  const listCategories = categories;
  return {
    props: {
      services,
      listCategories
    },
  }
}


export default OurServices;

