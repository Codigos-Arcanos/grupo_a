import axios from "axios";

const baseURL = 'http://localhost:4000/';

function connect() {
    axios
      .post(baseURL+"login",{	"user":"icaro","pass":"123!"})
      .then((res) => {
        if (res.data.token) {
            localStorage.setItem('user', JSON.stringify(res.data));
          }
    
          return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
      
  }

connect();
let user = JSON.parse(localStorage.getItem('user'));

console.log()

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'x-access-token' : user.token,
        'Content-Type': 'application/json'
      }
   });

 
export default api