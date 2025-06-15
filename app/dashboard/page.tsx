"use client";
import { useEffect, useState } from "react";
import styles from "../styles/dashboard.module.scss";
import { redirect } from "next/navigation";

type Name = {
    title: string;
    first: string;
    last: string;
  };

  type Picture = {
    medium: string;
  };

  type Age = {
    age: number;
  };

export default function Dashboard() {
  const [name, setName] = useState<Name>();
  const [age, setAge] = useState<Age>();
  const [image, setImage] = useState<Picture>();
  function handleLogOut(){
        localStorage.removeItem("name");
        localStorage.removeItem("registered");
        localStorage.removeItem("picture");
        redirect('/auth')
  }

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const registered = localStorage.getItem("registered");
    const picture = localStorage.getItem("picture");
    if (storedName) setName(JSON.parse(storedName));
    if (registered) setAge(JSON.parse(registered));
    if (picture) setImage(JSON.parse(picture));
  }, []);
  return (
    <div>
      <div className={styles.message}>You are loged In</div>
      <div className={styles.userCard}>
        <img src={image?.medium||undefined} alt={`${name} avatar`} className={styles.image} />
        <div className={styles.info}>
          <h2 className={styles.name}>Hello, {name?.title} {name?.first} {name?.last}</h2>
          <p className={styles.age}>Age: {age?.age}</p>
        </div>
        <button onClick={handleLogOut} className="px-4 py-2 bg-red-600 rounded-lg mt-6 hover:cursor-pointer hover:bg-red-500 transition-colors">Log out</button>
      </div>
    </div>
  );
}
