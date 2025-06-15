"use client";
import { useActionState, useEffect } from "react";
import styles from "../styles/style.module.scss";
import { formSubmit } from "./actions";
import { useRouter } from "next/navigation";


export default function SubscribeForm() {
  const [state, action, isLoading] = useActionState(formSubmit, "");
  const router = useRouter();
  console.log(state);
  useEffect(()=>{
    if(state&&!state.error){
        localStorage.setItem("name", JSON.stringify(state?.results?.[0].name));
        localStorage.setItem("picture", JSON.stringify(state?.results?.[0].picture));
        localStorage.setItem("registered", JSON.stringify(state?.results?.[0].registered));
        router.replace("/dashboard")
    }

  },[state])
  return (
    <div>
      <form action={action} className={styles.form}>
        <input
          name="phone_number"
          type="text"
          placeholder="Your phone number"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          {isLoading?"Loading":"Login"}
        </button>
      </form>
      {state?.error && <p className={styles.errorMessage}>{state.error}</p>}
    </div>
  );
}
