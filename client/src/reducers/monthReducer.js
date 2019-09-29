import { FETCH_MONTH } from "../actions/types";

export default function(state = [], action) {
   switch (action.type) {
      case FETCH_MONTH:
         return action.payload || false;
      default:
         return state;
   }
}
