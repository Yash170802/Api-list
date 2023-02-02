import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login';
import {store} from "./store.js";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
