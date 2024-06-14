import Button from '@mui/material/Button';
import { Modal } from 'antd';
import TextField from '@mui/material/TextField';

function FormLogin({ isModalOpenLogin, handleCancel }) {
  const handleLogin = (e) => {
    e.preventDefault();
    let a = 10;
    console.log(a);
  };

  return (
    <Modal open={isModalOpenLogin} onCancel={handleCancel} footer={null} closeIcon={null}>
      <h2 className="text-4xl mb-5">Sign In</h2>
      <form action="" className="flex flex-col gap-3" onSubmit={handleLogin}>
        <TextField label="Phone" variant="outlined" />
        <TextField label="Password" type="password" variant="outlined" />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </Modal>
  );
}

export default FormLogin;
