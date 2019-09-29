import React, { Component } from "react";
import Day from "./cal/DayEvents";
import Week from "./cal/WeekEvents";
import Month from "./cal/MonthEvents";
import { Link } from "react-router-dom";

class Calendar extends Component {
   constructor() {
      super();
      this.state = {
         day: false,
         week: true,
         month: false
      };
   }
   toggleMonth() {
      this.setState({
         day: false,
         week: false,
         month: true
      });
   }
   toggleWeek() {
      this.setState({
         day: false,
         week: true,
         month: false
      });
   }
   toggleDay() {
      this.setState({
         day: true,
         week: false,
         month: false
      });
   }
   render() {
      return (
         <div>
            <Link to="/calendar/new">New</Link>
            <button onClick={this.toggleDay.bind(this)}>Day</button>
            <button onClick={this.toggleWeek.bind(this)}>Week</button>
            <button onClick={this.toggleMonth.bind(this)}>Month</button>
            {this.state.day && <Day />}
            {this.state.week && <Week />}
            {this.state.month && <Month />}
         </div>
      );
   }
}

export default Calendar;
