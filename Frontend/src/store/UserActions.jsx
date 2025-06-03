import axios from "../api/apiconfig"
import { loaduser } from "./userSlice";


const asyncgetproducts = async()=>{
  try {
    const res = await axios.get("/users");
    console.log(res)
    loaduser(res.data)
  } catch (error) {
    console.log(error)
  }
}