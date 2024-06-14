import { Button } from 'antd';
import FormLogin from '../../../components/form/FormLogin';
import { useState } from 'react';

function Navbar() {
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
  const showModal = () => {
    setIsModalOpenLogin(true);
  };

  const handleCancel = () => {
    setIsModalOpenLogin(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center mx-auto w-[1900px] max-w-[calc(100%-40px)] h-[75px]">
        {/* logo */}
        <div className="logo">
          <img className="h-[60px]" src="https://mosoftvn.com/images/logo.png" alt="" />
        </div>
        {/* navigation */}
        <ul className="navigation flex gap-5">
          <li>Home</li>
          <li>Products</li>
          <li>Locations</li>
          <li>Cantacts</li>
        </ul>
        {/* actions */}
        <div className="actions flex gap-3">
          <Button type="text" onClick={showModal}>
            Sign In
          </Button>
          <Button type="primary">Sign Up</Button>
        </div>
      </nav>
      <FormLogin isModalOpenLogin={isModalOpenLogin} handleCancel={handleCancel} />
    </>
  );
}

export default Navbar;
