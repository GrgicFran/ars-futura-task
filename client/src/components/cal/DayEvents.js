import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDay } from "../../actions";
// import eventIcon from "../../resources/event.png";
import Event from "./Event";
import moment from "moment";

class DayEvents extends Component {
   componentDidMount() {
      this.props.fetchDay();
   }

   renderEvents(events) {
      let firstTime = true;
      return this.props.events.items.reverse().map(event => {
         return (
            <div key={event.id} className="m-4">
               {firstTime && (
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
            <div className="container mx-auto px-6 py-20">
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
   { fetchDay }
)(DayEvents);
