import './App.css';
import { NavigationBar } from './Components/NavigationBar/NavigationBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import ShopPage from './Pages/ShopPage';
import About from './Pages/About';
import Item from './Pages/ItemPage';
import Cart from './Pages/Cart';
import LoginRegister from './Pages/LoginRegister';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<ShopPage/>}/>
          <Route path='/about-us' element={<About/>}/>
            <Route path='item' element={<Item/>}>
              <Route path=':itemId' element={<Item/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginRegister/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
