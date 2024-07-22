import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import {WebSocketProvider} from "./context/WebSocketContext";
import ExamplePage from "./pages/ExamplePage";
import ExamplePage2 from "./pages/ExamplePage2";
import NotFound from "./pages/NotFound";
import PlotCommand from "./components/PlotCommand";
import {WebSocketProvider1, WebSocketProvider2} from "./context/WebSocketProviders";

function App() {


  return (
      <div className="App d-flex">

          <WebSocketProvider1 url='ws://scaleserver:8080/gshowd' command='-c&-jsonsingle&-prefix&-s&pie&+attr'>
              <BrowserRouter>
                  <SideBar instrumentName={'INSTRUMENT NAME'}/>
                  <div className='App flex-grow-1'>
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/examplepage" element={<ExamplePage/>} />
                          <Route path="/examplepage2" element={<ExamplePage2/>}/>
                          <Route path="*" element={<NotFound/>}/>
                      </Routes>
                  </div>
              </BrowserRouter>
          </WebSocketProvider1>
          {/*<WebSocketProvider2 url='ws://scaleserver:8080/gshowd'>*/}

          {/*</WebSocketProvider2>*/}
      </div>
  );
}

export default App;
