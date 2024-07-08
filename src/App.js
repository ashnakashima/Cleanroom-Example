import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Alarms2 from "./components/Alarms2";
import {WebSocketProvider} from "./context/WebSocketContext";
import EssentialFeatures from "./components/EssentialFeatures";

function App() {


  return (
      <div className="App d-flex">
          <WebSocketProvider url='ws://scaleserver:8080/gshowd'>
              <BrowserRouter>
                  <SideBar instrumentName={'SCALE'}/>
                  <div className='App flex-grow-1'>
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/alarms" element={<Alarms2/>} />
                      </Routes>
                  </div>
              </BrowserRouter>
          </WebSocketProvider>
      </div>
  );
}

export default App;
