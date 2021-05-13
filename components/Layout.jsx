import React from 'react'
import Footer from "./footer";
import Header from "./header";

const Layout = ({children}) => {
  // return class Higher extends React.Component {
  //   static getInitialProps(ctx) {
  //     return Page.getInitialProps(ctx);
  //   }

  //   render() {
  //     return (
  //       <div className="page-wraper bg-gray">
  //         <Header />
  //         <div className="page-content">
  //           <Page {...this.props} />
  //         </div>
  //         <Footer />
  //       </div>
  //     );
  //   }
  // };
  return (
    <div className="page-wraper bg-gray">
      <Header />
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
