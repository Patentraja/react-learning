import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Components/Aboutus"
import Header from "./Components/Header"
import Body from "./Components/Body"
import FAQ from "./Components/FAQ"
import Footer from "./Components/Footer"
import { Provider } from "react-redux"
import { store } from "./store"
const App=() =>{

return <>
<Provider store={store}>
<BrowserRouter>
<Header/>
 <Routes>
  <Route path="/" element={<Body/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/FAQ" element={<FAQ/>}></Route>
  </Routes> 
  <Footer/>
  </BrowserRouter>
</Provider>  
   </>
}

export default App 

