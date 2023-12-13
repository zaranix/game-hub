 import axios from "axios";

  export default axios.create({
  baseURL : 'https://api.rawg.io/api',
  params : {
    key : 'ea1d3c21f0fc4c148e17490a1cc48a1b'
  }
 })