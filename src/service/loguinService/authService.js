//import { authService } from '../authService/authService';
import axios from 'axios';
const gConf="http://localhost:8080/api/auth/login"


const authService = async ( correo, password) => {
  
  const { data } = await axios.post(`${gConf}`, {
    correo,
    password,
  });

  

  return data;
  
}
export default authService;