import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class NewEvent extends Component {
   constructor(props) {
      super(props);

      this.state = {
         summary: "",
         start: "",
         end: ""
      };
   }

   handleInputChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   handleSubmit = e => {
      e.preventDefault();

      const { summary, start, end } = this.state;

      const event = {
         summary,
         start,
         end
      };

      axios
         .post("/api/calendar/new-event", event)
         .then(res => this.props.history.push("/calendar"))
         .catch(err => {
            console.error(err);
         });
   };

   render() {
      return (
         <div>
            <Link to="/calendar">Go Back</Link>
            <br />
            <div className="container">
               <form onSubmit={this.handleSubmit}>
                  <div style={{ width: "30%" }} className="form-group">
                     <input
                        type="text"
                        className="form-control"
                        name="summary"
                        placeholder="Event name"
                        onChange={this.handleInputChange}
                     />
                  </div>
                  <br />
                  <div style={{ width: "30%" }} className="form-group">
                     <input
                        type="datetime-local"
                        className="form-control"
                        name="start"
                        onChange={this.handleInputChange}
                     />
                  </div>
                  <br />
                  <div style={{ width: "30%" }} className="form-group">
                     <input
                        type="datetime-local"
                        className="form-control"
                        name="end"
                        onChange={this.handleInputChange}
                     />
                  </div>
                  <br />
                  <div style={{ width: "30%" }}>
                     <button className="btn btn-success" type="submit">
                        Create
                     </button>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

export default NewEvent;
