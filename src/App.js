import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Posts from './pages/Posts';
import Errors from './pages/Errors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='products' element={<Products />}/>
        <Route path='products/:productId' element={<SingleProduct />}/>
        <Route path='posts' element={<Posts />}/>
        <Route path='*' element={<Errors/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
