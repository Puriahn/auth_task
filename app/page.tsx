"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles/style.module.scss";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      router.replace("/dashboard");
    } else {
      router.replace("/auth");
    }
  }, [router]);

  return <div className={styles.message}>redirecting  ...</div>;
}
