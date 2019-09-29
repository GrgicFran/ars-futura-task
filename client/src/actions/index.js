import axios from "axios";
import { FETCH_USER, FETCH_EVENTS } from "./types";

export const fetchUser = () => async dispatch => {
   const res = await axios.get("/api/current_user");
   dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchEvents = () => async dispatch => {
   const res = await axios.get("/api/calendar/primary/week");

   dispatch({ type: FETCH_EVENTS, payload: res.data });
};

export const fetchDay = () => async dispatch => {
   const res = await axios.get("/api/calendar/primary/day");

   dispatch({ type: FETCH_EVENTS, payload: res.data });
};

export const fetchWeek = () => async dispatch => {
   const res = await axios.get("/api/calendar/primary/week");

   dispatch({ type: FETCH_EVENTS, payload: res.data });
};

export const fetchMonth = () => async dispatch => {
   const res = await axios.get("/api/calendar/primary/month");

   dispatch({ type: FETCH_EVENTS, payload: res.data });
};
