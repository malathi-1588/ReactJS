import BasicExample from "./components/navbar";
import {Routes,Route} from "react-router-dom";
import Home from "./components/login";
// import Login from "./components/login";
function App()
{
  return(<div>
    <BasicExample/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path ="/login" element={<Login/>}/> */}

</Routes>
  </div>)
}
export default App;