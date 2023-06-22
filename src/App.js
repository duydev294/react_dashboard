import React from "react";
// import CommonComponent from "./component/frame/frame";
// import Header from "./component/header/header";
import Dashboard from "./component/dashboard/dashboard";
import { ApiProvider } from "./context/ApiProvider";
function App(){
    return(
        <div className="app">
        <ApiProvider>
          <Dashboard></Dashboard>
        </ApiProvider>
      </div>
  
    )
}
export default App;