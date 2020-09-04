import axios from "axios";

const instance = axios.create({
  baseURL: "https://twitter-mern-backend.herokuapp.com/",
});

export default instance;
