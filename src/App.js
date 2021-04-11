import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import HeaderComponent from './components/header/HeaderComponent';
import VivinoPage from './pages/VivinoPage';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
        {/* <HeaderComponent></HeaderComponent> */}
        <VivinoPage></VivinoPage>
    </div>
    </Provider>

  );
}

export default App;
