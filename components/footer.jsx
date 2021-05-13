import * as Const from "../utils/Const";
import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
        <div>
            <footer className="site-footer nail-footer">
                <div className="footer-top text-center bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="m-b0">Let's Connect</h3>
                                <div className="dlab-separator bg-white"></div>
                                <p className="max-w600 m-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                <ul className="list-inline m-t20">
                                    <li><a href="#!"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer bottom part --> */}
                <div className="footer-bottom bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 text-left"> <span>Copyright © 2020 DexignZone</span> </div>
                            <div className="col-md-6 col-sm-6 text-right"> 
                                <div className="widget-link "> 
                                    <ul>
                                        <li><a href="/about-us"> About Us</a></li> 
                                        <li><a href="/about-us"> Contact Us</a></li> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="scroltop" type="button"><i className="fa fa-angle-up"></i></button>
            </footer>
        </div>
    );
  }
}
