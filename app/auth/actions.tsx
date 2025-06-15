"use server"

import { convertPersianToEnglish } from "../functions/functions";

export async function formSubmit(previousState:string,formData:FormData) {
    const data={
        phone_number: convertPersianToEnglish(formData.get("phone_number")?.toString().trim()??"") || ""
    }
    console.log(data.phone_number)
    const isValidIranPhone = /^09\d{9}$/.test(data.phone_number);
    if (!isValidIranPhone) {
    return { error: "the phone number is incorrect" };
  }
    try {
        const formDataToSend = new FormData();
        formDataToSend.append("phone_number", data.phone_number);
        const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
        const result = await res.json();
        return result;
      } catch (error) {
        console.error('Error fetching user:', error);
        return null;
      }
    
}