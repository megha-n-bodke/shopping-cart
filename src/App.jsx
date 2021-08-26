import logo from './logo.svg';
import './App.css';
import OurAdvantages from './Components/HomePageEssentials/OurAdvantages';
import HighQuality from './Components/HomePageEssentials/HighQuality';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LoginPage from './Components/Login/LoginPage';
import{BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import MyCart from './pages/my-cart/MyCart';
import MyWishList from './pages/my-wish-list/MyWishList';
import Albums from './pages/albums/Albums';
import Blog from './pages/blog/Blog';


function App() {
  return (
    <div>
    <Header/>
    <BrowserRouter>

    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
