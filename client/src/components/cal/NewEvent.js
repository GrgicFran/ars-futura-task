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
            <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
               <Link to="/calendar">{"<"} Go Back</Link>
            </div>
            <br />
            <div className="w-full flex justify-center">
               <div className="w-full max-w-xs">
                  <form
                     className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                     onSubmit={this.handleSubmit}
                  >
                     <div className="mb-4">
                        <label
                           className="block text-gray-700 text-sm font-bold mb-2"
                           for="username"
                        >
                           Event name
                        </label>
                        <input
                           type="text"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           name="summary"
                           placeholder="Event name"
                           onChange={this.handleInputChange}
                        />
                     </div>
                     <br />
                     <div className="">
                        <label
                           className="block text-gray-700 text-sm font-bold mb-2"
                           for="start-time"
                        >
                           Start Time
                        </label>
                        <input
                           type="datetime-local"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           name="start"
                           onChange={this.handleInputChange}
                        />
                     </div>
                     <br />
                     <div className="form-group">
                        <label
                           className="block text-gray-700 text-sm font-bold mb-2"
                           for="username"
                        >
                           End Time
                        </label>
                        <input
                           type="datetime-local"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           name="end"
                           onChange={this.handleInputChange}
                        />
                     </div>
                     <br />
                     <div style={{ width: "30%" }}>
                        <button
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                           type="submit"
                        >
                           Create
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      );
   }
}

export default NewEvent;
