import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Carts from "./components/Carts";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/carts">
              <Carts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
