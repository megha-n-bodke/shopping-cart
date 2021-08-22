import logo from './logo.svg';
import './App.css';
import OurAdvantages from './Components/HomePageEssentials/OurAdvantages';
import HighQuality from './Components/HomePageEssentials/HighQuality';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LoginPage from './Components/Login/LoginPage';
import{Route,Switch} from 'react-router-dom'


function App() {
  return (
    <div>
    <switch>
    <Header/>
    <Switch>
    <Route exact path = "/login" component = {LoginPage}>
    <LoginPage/>
    </Route>
    </Switch>
    <OurAdvantages/>
    <HighQuality/>
    <Footer/>
   
    </switch>
</div>  );
}

export default App;
