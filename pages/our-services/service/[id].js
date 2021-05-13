import { Component } from "react";
// import {getAllServicesId, getAllServicesDetails} from "../../../services/ourServicesPageServices"
import {mockServices} from "../../../services/mockServices"
import ServiceDetailsSession from "./components/serviceDetailsSession"
import Banner from "./components/banner"
class ServiceDetails extends Component {
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
        // inner page banner
        <div className = "page-content one-page-layout">
          <Banner/>
          <ServiceDetailsSession allServicesDetails = {this.props.allServicesDetails}/>
        </div>
        //Services Details
      );
    }
  }

export async function getStaticPaths() {
  const paths = mockServices.map((item) => {return {params: {id: item.id}}});
  return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps({ params }) {
    // const allServicesDetails = await getAllServicesDetails(params.id)
    const allServicesDetails = mockServices.filter(item => item.id === params.id)
    return {
      props: {
        allServicesDetails
      }
    }
  }
export default ServiceDetails;



