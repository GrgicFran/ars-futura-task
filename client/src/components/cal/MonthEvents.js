import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMonth } from "../../actions";
// import eventIcon from "../../resources/event.png";
import moment from "moment";
import Event from "./Event";

class MonthEvents extends Component {
   componentDidMount() {
      this.props.fetchMonth();
   }

   renderEvents(events) {
      let date = moment();
      let firstTime = true;
      return this.props.events.items.map(event => {
         let showTitle = !moment(event.start.dateTime).isSame(date, "week");
         if (!moment(event.start.dateTime).isSame(date, "week")) {
            date = event.start.dateTime;
         }
         return (
            <div key={event.id} className="m-4">
               {(showTitle || firstTime) && (
                  <h1>
                     {moment(event.start.dateTime).format("DD.MM.")} -{" "}
                     {moment(event.start.dateTime)
                        .add(7, "d")
                        .format("DD.MM.")}
                  </h1>
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
               <div className="oject-center">{this.renderEvents()}</div>
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
   { fetchMonth }
)(MonthEvents);
