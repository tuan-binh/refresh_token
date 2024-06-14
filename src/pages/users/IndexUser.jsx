import Footer from '../../layouts/users/footer/Footer';
import Navbar from '../../layouts/users/header/Navbar';
import { Outlet } from 'react-router-dom';

function IndexUser() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default IndexUser;
