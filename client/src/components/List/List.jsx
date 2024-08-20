import MainCard from '../Card/MainCard';
import styles from './List.module.css';

export default function List({ data, setEntries, user }) {
  return (
    <div className={styles.wrapper}>
      {data.length
        ? data.map((el) => (
            <MainCard user={user} key={el.id} entry={el} setEntries={setEntries} />
          ))
        : null}
    </div>
  );
}
