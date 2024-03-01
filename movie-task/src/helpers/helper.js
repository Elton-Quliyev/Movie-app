import axios  from "axios";
import { API_KEY, BASE_URL } from "../config";

const getData = async (path) =>{

 
    try {
      const response = await axios.get(`${BASE_URL}${path}?api_key=${API_KEY}`);
      console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.log(error);
    }


}

export default getData