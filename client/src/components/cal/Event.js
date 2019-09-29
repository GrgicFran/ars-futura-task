import React, { Component } from "react";
import eventIcon from "../../resources/event.png";
import moment from "moment";
import axios from "axios";

class Event extends Component {
   constructor(props) {
      super(props);
      this.state = {
         deleteID: ""
      };
   }
   handleDelete = (e, data) => {
      // access to e.target here
      console.log(data);
      axios
         .post("/api/calendar/delete-event", data)
         .then(res => this.props.history.push("/calendar"))
         .catch(err => {
            console.error(err);
         });
   };
   render() {
      return (
         <div key={this.props.event.id} className="m-4">
            <div className="max-w-xl mx-auto flex p-6 bg-white rounded-lg shadow-xl">
               <div
                  onClick={e =>
                     this.handleDelete(e, { eventId: this.props.event.id })
                  }
                  className="flex-shrink-0 w-10"
               >
                  <img src={eventIcon} alt="Delete" />
               </div>
               <div className="ml-6 pt-1">
                  <h4 className="text-xl text-gray-900 leading-tight">
                     {this.props.event.summary}
                  </h4>
                  <p className="text-base text-gray-700 leading-normal">
                     {moment(this.props.event.start.dateTime).format("HH:mm")} -{" "}
                     {moment(this.props.event.end.dateTime).format("HH:mm")}
                  </p>
               </div>
            </div>
         </div>
      );
   }
}

export default Event;
