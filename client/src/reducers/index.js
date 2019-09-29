import { combineReducers } from "redux";
// import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import calendarReducer from "./calendarReducer";
import dayReducer from "./dayReducer";
import weekReducer from "./weekReducer";
import monthReducer from "./monthReducer";
// import { calendar } from "googleapis/build/src/apis/calendar";

export default combineReducers({
   auth: authReducer,
   events: calendarReducer,
   day: dayReducer,
   week: weekReducer,
   month: monthReducer
   //    form: reduxForm
});
