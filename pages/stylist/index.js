import { Component } from "react";
import Banner from "./components/banner";
import Stylists from "./components/stylists";
import {getStylists} from "../../services/teamServices"

class Stylist extends Component {
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
        <Stylists stylists={this.props.stylists}/>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const stylists = getStylists();
  return {
    props: {
      stylists
    },
  }
}
export default Stylist;
