import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MyDay from './component/MyDay';
import Important from './component/Important';
import SideMenu from './component/SideMenu';
import Header from './component/Header';



function App() {
  return (
    <div className="">
      {/* <Provider > */}
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className='flex'>          
            <SideMenu />
            <div className='flex-grow bg-gray-100'>
            <Routes>
              <Route path='/' element={<MyDay></MyDay>}></Route>
              <Route path='/important' element={<Important></Important>}></Route>
            </Routes>
            </div>
            </div>
        </BrowserRouter>
        <ToastContainer className="toast-position"
          position="bottom-right"></ToastContainer>
      </div>
      {/* </Provider> */}

    </div>
  );
}

export default App;
