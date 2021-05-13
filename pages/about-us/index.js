import { Component } from "react";
import Banner from "./components/banner";
import AboutSession from "./components/aboutSession";
import Owner from "./components/owner";
import Services from "./components/services";
import Branch from "./components/branch"
import {getBranches} from '../../services/aboutUsServices'
import {categories} from "../../services/mockServices"


class AboutUs extends Component {
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
        <AboutSession/>
        <Owner/>
        <Services services = {this.props.services}/>
        <Branch branches={this.props.branches}/>
      </div>
    );
  }
}
export async function getServerSideProps(context) {
  const services = categories;
  const branches = getBranches();
  return {
    props: {
      services,
      branches
    },
  }
}
export default AboutUs;
