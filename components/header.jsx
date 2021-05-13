import { Component } from "react";
import { withRouter } from "next/router";
import Link from 'next/link'

class Header extends Component {
  state = {
    navCollapsed: true,
    showing: false,
  };
  _onToggleNav = () => {
    this.setState({ showing: true }, () => {
      setTimeout(() => {
        this.setState({ navCollapsed: !this.state.navCollapsed }, () => {
          this.setState({ showing: false });
        });
      }, 500);
    });
  };

  render() {
    const { navCollapsed, showing } = this.state;
    const { router } = this.props;
    return (
      <div>
        <header
          className="site-header mo-left header center primary nail-header navstyle4"
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
          }}
        >
          <div className="sticky-header main-bar-wraper navbar-expand-lg">
            <div className="main-bar clearfix ">
              <div className="container clearfix">
                <div className="logo-header mostion">
                  <Link href="/">
                    <a>
                      <img src="/images/logo-nail.png" alt="" />
                    </a>
                  </Link>
                </div>
                <button
                  className={`navbar-toggler collapsed navicon justify-content-end ${
                    navCollapsed ? "" : "open"
                  }`}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded={!navCollapsed}
                  aria-label="Toggle navigation"
                  onClick={this._onToggleNav}
                >
                  <span />
                  <span />
                  <span />
                </button>
                <div
                  className={`header-nav navbar-collapse  ${
                    navCollapsed ? "" : "show"
                  } ${showing ? "collapsing" : ""} justify-content-between`}
                  id="navbarNavDropdown"
                >
                  <div className="logo-header">
                    <Link href="/">
                      <a>
                        <img src="/images/logo-nail.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <ul className="nav navbar-nav nav1">
                    {this.renderNav("Home", "/home")}
                    {this.renderNav("About Us", "/about-us")}
                    {this.renderNav("Services", "/our-services")}
                  </ul>
                  <ul className="nav navbar-nav nav2" >
                    {this.renderNav("Stylist", "/stylist")}
                    {this.renderNav("Gallery", "/gallery")}
                    {this.renderNav("Booking", "/booking")}
                    {/* {this.renderNav("Contact Us", "/contact")} */}
                  </ul>
                  <div className="footer-menu">
                    <ul className="list-inline footer-social text-center m-b0">
                      <li>
                        <a className="fa fa-facebook" />
                      </li>
                      <li>
                        <a className="fa fa-twitter" />
                      </li>
                      <li>
                        <a className="fa fa-linkedin" />
                      </li>
                      <li>
                        <a className="fa fa-google-plus" />
                      </li>
                    </ul>
                    <p className="copyright">© Copyright 2020</p>
                    <p className="copyright-text">
                      Design With By <span>DexignZone</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }

  renderNav(title, href, isHome = false) {
    const { router } = this.props;
    return (
      <li
        className={`${
          (isHome && router.pathname === href) ||
          (!isHome && router.pathname.includes(href))
            ? "active"
            : ""
        }`}
      >
        <Link href={href} >
          <a className="nav-link">
            {title} <i className="fa" />
          </a>
        </Link>
      </li>
    );
  }
}
export default withRouter(Header);
