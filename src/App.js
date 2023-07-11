import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';

//File where the basic elements are loaded: Navbar, Footer, Scroll to top button and the AnimatedRoutes element, which has the rest of the routes inside and is used to create an animation between pages

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Scroll/>
        <div className='margins'>
          <AnimatedRoutes/>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;