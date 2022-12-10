import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import NotFound from "./Routes/NotFound"
import { routes } from "./routes";
import { useGlobalStates } from "./Components/utils/global.context";



function App() {
  const {theme} = useGlobalStates()
  return (
      <div className={theme}>
          <Navbar/>
          <Routes>
            <Route path ={routes.home} element={<Home/>}/>
            <Route path ={routes.contact} element={<Contact/>}/>
            <Route path ={routes.favs} element={<Favs/>}/>
            <Route path='/dentista/:id' element={<Detail/>}/>
            <Route path='*' element= {<NotFound/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
