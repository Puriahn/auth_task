"use client"
import { useActionState } from 'react';
import styles from '../styles/style.module.scss';
import { formSubmit } from './actions';

export default function SubscribeForm() {
    const [error,action,isLoading]=useActionState(formSubmit,"")
  return (
    <form action={action} className={styles.form}>
    <input type="text" placeholder="Your email" className={styles.input} />
    <button type="submit" className={styles.button}>Subscribe</button>
  </form>
  );
}
