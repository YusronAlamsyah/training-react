import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import DetailCategory from './pages/DetailCategory';
import "./css/Training.css";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        
           <Navbar />
          <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Category />} path="/category" />
              <Route element={<DetailCategory />} path="/detail-category/:id" />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
