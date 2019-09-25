import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// const Header = () => <h2>Header</h2>;
const Calendar = () => <h2>Calendar</h2>;
// const NewEvent = () => <h2>New Event</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
   return (
      <div>
         <BrowserRouter>
            <div>
               <Route exact path="/" component={Landing}></Route>
               <Route path="/calendar" component={Calendar}></Route>
            </div>
         </BrowserRouter>
      </div>
   );
};

export default App;
