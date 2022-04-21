import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyled } from "./themes/GlobalStyled";


const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >

        </Route>
      </Routes>
      {GlobalStyled()}
    </BrowserRouter>
  )
}

export default App
