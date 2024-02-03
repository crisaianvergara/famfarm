import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content"></div>
    </div>
  );
}

export default App;
