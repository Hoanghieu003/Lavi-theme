import { Component } from "react";
import {getAllBranchesId, getAllBranchesDetails} from "../../../services/aboutUsServices"
import BranchDetailsSession from "./components/branchDetailsSession"
import Banner from "./components/banner"
class Branch extends Component {
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
          <BranchDetailsSession allBranchDetails = {this.props.allBranchDetails.dataFiltedById[0]}/>
        </div>
        //Services Details
      );
    }
  }

export async function getStaticPaths() {
    const paths = getAllBranchesId();
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps({ params }) {
    const allBranchDetails = await getAllBranchesDetails(params.id)
    return {
      props: {
        allBranchDetails
      }
    }
  }
export default Branch;



