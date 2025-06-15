"use client";
import { useEffect, useState } from "react";
import styles from "../styles/dashboard.module.scss";
export default function Dashboard() {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const registered = localStorage.getItem("registered");
    const picture = localStorage.getItem("picture");
    console.log(registered);

    if (storedName) setName(JSON.parse(storedName));
    if (registered) setAge(JSON.parse(registered));
    if (picture) setImage(JSON.parse(picture));
  }, []);
  return (
    <div>
      <div className={styles.message}>Loged In</div>
      <div className={styles.userCard}>
        <img src={image?.medium||undefined} alt={`${name} avatar`} className={styles.image} />
        <div className={styles.info}>
          <h2 className={styles.name}>Hello, {name?.title} {name?.first} {name?.last}</h2>
          <p className={styles.age}>Age: {age?.age}</p>
        </div>
      </div>
    </div>
  );
}
