//import axios from "axios";
//import {GLOBAL_VARIABLE} from "./config"


export default class Subscription {

  static add(query) {
    let param = {};
    if (query) {
      param["params"] = query;
    }
    //return axios.get(`${process.env.REACT_APP_POSTS_API_URL}`, param)
    //axios.post(GLOBAL_VARIABLE.SUBSCRIPTION_API_URL, param)
    return true;
  }
}