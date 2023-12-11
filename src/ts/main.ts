import axios from 'axios';
import '../scss/style.scss'
import { IBoredResponse } from './models/IBoredResponse';



async function findActivity() : Promise<string> {
  const response = await axios.get<IBoredResponse>("http://www.boredapi.com/api/activity/");
  
  console.log(response.data.activity);
  
 return response.data.activity;
}

const findActivityButton = document.getElementById("findActivityButton");
const activityText = document.createElement("h3");

findActivityButton?.addEventListener("click", async ()=> {

const activityCard = document.getElementById("activityCard");
  const foundActivity = await findActivity();

    
    activityText.innerHTML = foundActivity;
  
    activityCard?.appendChild(activityText);
  
});