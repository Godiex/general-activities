import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./state/store";

function App() {
  return (
    <>
      <Provider store={ store }>
        <Router>
        </Router>
      </Provider>
    </>
  );
}

export default App;
