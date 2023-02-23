import axios from "axios";

export default function fetchEvents(query = {}) {
  return axios.get(`${process.env.REACT_APP_API_URL}/events`,
    { params: query }
  );
};
