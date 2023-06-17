<<<<<<< HEAD
import React from "react";
import CommonComponent from "./component/frame/frame";
import Header from "./component/header/header";
import Dashboard from "./component/dashboard/dashboard";
function App(){
    return(
        <div className="app">
          <Dashboard></Dashboard>
      </div>
  
    )
}
=======
import React  from "react";
import './app.css'
import SideBar from "./Components/SideBar/SideBar";
import Body from "./Components/Body Selection/Body";



const App = () => {
  return (
    <div className='container'>
      <SideBar/>
      <Body />
    </div>
  )
}

>>>>>>> 313802f (gis)
export default App;