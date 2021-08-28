import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CalendarPage from "./components/CalendarPage";
import Exercises from "./components/Exercises";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-div">
          <Sidebar />
          <div className="main-display">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/calendar">
                <CalendarPage />
              </Route>
              <Route path="/exercises">
                <Exercises />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
