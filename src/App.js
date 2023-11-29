import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyDay from './component/MyDay';
import Important from './component/Important';
import SideMenu from './component/SideMenu';
import Header from './component/Header';
import Store from './Redux/Store';



function App() {
  return (
    <div>
      <Provider store={Store}>
      <div className="bg-gray-100 App">
        <BrowserRouter>
          <Header />
          <div className='block md:flex'>          
            <SideMenu />
            <div className='flex-grow bg-gray-100'>
            <Routes>
              <Route path='/' element={<MyDay></MyDay>}></Route>
              <Route path='/important' element={<Important></Important>}></Route>
            </Routes>
            </div>
            </div>
        </BrowserRouter>
      </div>
      </Provider>

    </div>
  );
}

export default App;
