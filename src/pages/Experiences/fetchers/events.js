import axios from "axios";

export const fetchEvents = async (query) => {
   console.log("Fetching events");
   const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/events`, { params: query });
   const events = response.data;

   console.log("Events ", events);
   return events;
};
