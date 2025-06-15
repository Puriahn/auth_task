"use server"

import axios from "axios";

export async function formSubmit(previousState:string,formData:FormData) {
    console.log("server action running")
    const data={
        phone_number: formData.get("phone_number") || ""
    }
    try {
        const formDataToSend = new FormData();
        formDataToSend.append("phone_number", data.phone_number);
        const response = await axios.get('https://randomuser.me/api/?results=1&nat=us');
        const result = response.data;

        console.log('Random user:', result);
        return result;
      } catch (error) {
        console.error('Error fetching user:', error);
        return null;
      }
    
}