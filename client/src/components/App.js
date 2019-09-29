import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Calendar from "./Calendar";
import NewEvent from "./cal/NewEvent";
// const Landing = () => <h2>Landing</h2>;

class App extends Component {
   componentDidMount() {
      this.props.fetchUser();
   }

   render() {
      return (
         <div className="container mx-auto">
            <BrowserRouter>
               <div>
                  <Header />
                  <Route exact path="/" component={Landing}></Route>
                  <Route exact path="/calendar" component={Calendar}></Route>
                  <Route path="/calendar/new" component={NewEvent}></Route>
               </div>
            </BrowserRouter>
         </div>
      );
   }
}

export default connect(
   null,
   actions
)(App);
