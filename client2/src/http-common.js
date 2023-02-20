import axios from "axios";

export default axios.create({
  baseURL: "https://vistateam.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});