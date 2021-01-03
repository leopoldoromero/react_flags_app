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
  
  
  const classDark = props.darkMode ? "app__darkmode" : "app"
  
  //console.log(props)
  return (
    <div className={classDark}>
      <Router>
        <Header />
        <Switch>
          <Route path="/country/:id" component={CountryPage} />
          <Route path="/">
            <div className="app__container">
              <div className="app__search">
                <ActionList />
              </div>
              <div className="app__countrilist">
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
