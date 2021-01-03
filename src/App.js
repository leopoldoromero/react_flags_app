import {useState, useEffect} from "react"
import Header from "./components/Header"
import ActionList from "./components/ActionList"
import {useStateValue} from "./redux/StateProvider"
import CountryList from "./components/CountryList"
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import CountryPage from "./components/CountryPage"
import './App.css';

function App() {

  const [{...props}, dispatch] = useStateValue()
  const [darkMode, setDarkMode] = useState(false);
  
  const darkClass = darkMode ? "darkmode" : "app"
  
  //console.log(props)
  return (
    <div className={darkClass}>
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Switch>
          <Route path="/country/:id" component={CountryPage} />
          <Route path="/">
            <div className="app_container">
              <div className="app_search">
                <ActionList darkMode={darkMode}/>
              </div>
              <div className="app_countrilist">
                <CountryList/>
              </div>
              
            </div> 
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
