import axios from "axios";

export default function fetchEvents() {
   return axios.get(`http://localhost:8000/api/v1/events`);
};
