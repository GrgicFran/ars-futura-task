import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
   renderContent() {
      switch (this.props.auth) {
         case null:
            return;
         case false:
            return (
               <a
                  href="/auth/google"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-400 hover:bg-white mt-4 lg:mt-0"
               >
                  Login with Google
               </a>
            );
         default:
            return (
               <a
                  href="/api/logout"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-400 hover:bg-white mt-4 lg:mt-0"
               >
                  Logout
               </a>
            );
      }
   }
   render() {
      return (
         <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6">
            <Link to={this.props.auth ? "/calendar" : "/"}>
               <div className="flex items-center flex-shrink-0 text-white mr-6">
                  <svg
                     class="fill-current h-8 w-8 mr-2"
                     width="54"
                     height="54"
                     viewBox="0 0 54 54"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                  </svg>
                  <span className="font-semibold text-xl tracking-tight">
                     Kalendarko
                  </span>
               </div>
            </Link>
            <div>{this.renderContent()}</div>
         </nav>
      );
   }
}

function mapStateToProps({ auth }) {
   return { auth };
}

export default connect(mapStateToProps)(Header);
