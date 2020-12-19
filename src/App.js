import Header from "./components/Header"
import ActionList from "./components/ActionList"
import {useStateValue} from "./redux/StateProvider"
import CountryList from "./components/CountryList"
import './App.css';

function App() {

  const [{...props}, dispatch] = useStateValue()

  //console.log(props)
  return (
    <div className="app">
      <Header/>
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
