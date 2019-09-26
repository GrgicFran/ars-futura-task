import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
const Calendar = () => <h2>Calendar</h2>;
const NewEvent = () => <h2>New Event</h2>;
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
