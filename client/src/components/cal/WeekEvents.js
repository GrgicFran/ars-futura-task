import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeek } from "../../actions";
// import eventIcon from "../../resources/event.png";
import moment from "moment";
import Event from "./Event";

class WeekEvents extends Component {
   componentDidMount() {
      this.props.fetchWeek();
   }

   renderEvents(events) {
      let date = moment();
      let firstTime = true;
      return this.props.events.items.map(event => {
         let showTitle = !moment(event.start.dateTime).isSame(date, "date");
         if (!moment(event.start.dateTime).isSame(date, "date")) {
            date = event.start.dateTime;
         }
         return (
            <div key={event.id} className="m-4">
               {(showTitle || firstTime) && (
                  <h1>{moment(event.start.dateTime).format("DD.MM.")}</h1>
               )}
               {(firstTime = false)}
               <Event event={event}></Event>
            </div>
         );
      });
   }

   render() {
      if (!this.props.events || !this.props.events.items) {
         return <div></div>;
      }

      return (
         <div className="flex flex-wrap">
            <div className="container mx-auto px-6 py-5">
               <div className="object-center">{this.renderEvents()}</div>
            </div>
            <div>{console.log(this.props.events)}</div>
         </div>
      );
   }
}

function mapStateToProps({ events }) {
   return { events };
}

export default connect(
   mapStateToProps,
   { fetchWeek }
)(WeekEvents);
