import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDay } from "../../actions";
import eventIcon from "../../resources/event.png";
import moment from "moment";

class DayEvents extends Component {
   componentDidMount() {
      this.props.fetchDay();
   }

   renderEvents(events) {
      return this.props.events.items.reverse().map(event => {
         return (
            <div key={event.id} className="m-4">
               <div className="max-w-xl mx-auto flex p-6 bg-white rounded-lg shadow-xl">
                  <div className="flex-shrink-0 w-10">
                     <img src={eventIcon} alt="ChitChat Logo" />
                  </div>
                  <div className="ml-6 pt-1">
                     <h4 className="text-xl text-gray-900 leading-tight">
                        {event.summary}
                     </h4>
                     <p className="text-base text-gray-700 leading-normal">
                        {moment(event.start.dateTime).format("HH:mm")} -{" "}
                        {moment(event.end.dateTime).format("HH:mm")}
                     </p>
                  </div>
               </div>
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
