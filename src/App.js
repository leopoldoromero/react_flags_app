import {useState, useEffect} from "react"
import Header from "./components/Header"
import ActionList from "./components/ActionList"
import {useStateValue} from "./redux/StateProvider"
import CountryList from "./components/CountryList"
import './App.css';

function App() {

  const [{...props}, dispatch] = useStateValue()
  const [darkMode, setDarkMode] = useState(false);

  const darkClass = darkMode ? "darkmode" : "app"

  //console.log(props)
  return (
    <div className={darkClass}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className="app_container">
        <div className="app_search">
          <ActionList/>
          
        </div>
        <div className="app_countrilist">
          <CountryList/>
        </div>
        
      </div> 
    </div>
  );
}

export default App;
