import logo from './logo.svg';
import './App.css';
import RegisterForm from './Components/RegisterForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
  <>
  <RegisterForm/>
  <ToastContainer/>
  </>
  );
}

export default App;
