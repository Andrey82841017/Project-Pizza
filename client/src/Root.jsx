import { Outlet } from 'react-router-dom';
import Navbar from './widgets/Navbar/Navbar';
import NavbarCh from './widgets/Navbar/NavbarCh';

export default function Root({ user, setUser, restaurants }) {
  return (
    <>
      {/* <Navbar user={user} setUser={setUser} restorans={restorans} /> */}
      <NavbarCh user={user} setUser={setUser} restaurants={restaurants}/>
      <div style={{ marginTop: '70px' }}>
        <Outlet />
      </div>
    </>
  );
}
