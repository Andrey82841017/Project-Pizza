import { useState, useEffect } from 'react';
import Form from '../../components/Form/Form';
import List from '../../components/List/List';
import styles from './HomePage.module.css';
import axiosInstance from '../../axiosInstance';

export default function HomePage({ user }) {
  const [entries, setEntries] = useState([]);
  

  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/tasks`)
      .then((res) => {
        setEntries(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Form user={user} setEntries={setEntries} />
      <List user={user} data={entries} setEntries={setEntries} />
    </div>
  );
}
