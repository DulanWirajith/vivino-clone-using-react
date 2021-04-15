import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import VivinoPage from "./pages/VivinoPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <VivinoPage></VivinoPage>
      </div>
    </Provider>
  );
}

export default App;
