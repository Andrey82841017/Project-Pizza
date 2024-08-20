import { Avatar, Menu } from '@chakra-ui/react';
import axiosInstance, { setAccessToken } from '../../axiosInstance';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import DrawerExample from '../../components/Drawer/DrawerExample';

export default function Navbar({ user, setUser, restorans }) {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    const response = await axiosInstance.get(
      `${import.meta.env.VITE_API}/auth/logout`
    );
    if (response.status === 200) {
      setUser({});
      setAccessToken('');
      navigate('/');
    }
  };

  return (
    <Menu>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link to='/'></Link>
          <DrawerExample restorans={restorans}/>
        </div>
        <div className={styles.right}>
          {user?.username ? (
            <>
              <Avatar name={user.username} />
              {/* <Link to='/'>{user.username}</Link> */}
              <Link onClick={logoutHandler}>Выйти</Link>
            </>
          ) : (
            <>
              <Link to='/signin'>Войти</Link>
              <Link to='/signup'>Регистрация</Link>
            </>
          )}
        </div>
      </div>
    </Menu>
  );
}
