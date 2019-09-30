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
            <ul class="flex m-6">
               <li class="mr-3">
                  <Link
                     to="/calendar/new"
                     className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
                  >
                     Add New
                  </Link>
               </li>
               <li class="mr-3">
                  <button
                     onClick={this.toggleMonth.bind(this)}
                     className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
                  >
                     Month
                  </button>
               </li>
               <li class="mr-3">
                  <button
                     onClick={this.toggleWeek.bind(this)}
                     className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
                  >
                     Week
                  </button>
               </li>
               <li class="mr-3">
                  <button
                     onClick={this.toggleDay.bind(this)}
                     className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
                  >
                     Day
                  </button>
               </li>
            </ul>
            {this.state.day && (
               <h1 className="text-gray-700 text-2xl ml-20">Day View</h1>
            )}
            {this.state.week && (
               <h1 className="text-gray-700 text-2xl ml-20">Week View</h1>
            )}
            {this.state.month && (
               <h1 className="text-gray-700 text-2xl ml-20">Month View</h1>
            )}
            {this.state.day && <Day />}
            {this.state.week && <Week />}
            {this.state.month && <Month />}
         </div>
      );
   }
}

export default Calendar;
