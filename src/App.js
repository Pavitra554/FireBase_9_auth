import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoggedIN from "./components/LoggedIN";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "./Context/AuthContext";

function App() {
  const {currentUser}  = useAuth();
  return (
    <Router>
        
        <div className="App">
          <AnimatePresence>
            <Switch>
              {currentUser ? <LoggedIN /> : <Main />}
              </Switch>
          </AnimatePresence>
        </div>

      </Router>
  );
}

export default App;
