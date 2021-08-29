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
import OurJourney from './pages/journey/OurJourney';
import Blogdetails from './pages/blog/Blogdetails';
import ProductDetails from './Components/ProductList/ProductDetails';


function App() {
  return (
    <div>
    
    <BrowserRouter>
    <Header/>

    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/my-cart" component={MyCart} />
                    <Route exact path="/my-wish-list" component={MyWishList} />
                    <Route exact path="/albums" component={Albums} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/journey" component={OurJourney} />
                    <Route exact path="/blogdetails" component={Blogdetails} />
                    <Route exact path="/productdetails" component={ProductDetails} />

                </Switch>
    <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
