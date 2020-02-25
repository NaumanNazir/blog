import axios from "axios";
import {GLOBAL_VARIABLE} from "./config"


export default class Pages {

  static get(query) {
    let param = {};
    if (query) {
      param["params"] = query;
    }
    //return axios.get(`${process.env.REACT_APP_POSTS_API_URL}`, param)
    return axios.get(GLOBAL_VARIABLE.PAGES_API_URL, param)
  }
}