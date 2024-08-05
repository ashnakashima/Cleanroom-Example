import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import {WebSocketProvider1} from "./context/WebSocketProviders";
import VacGauge from "./pages/VacGauge";
import GeistMonitors from "./pages/GeistMonitors";
import LeskerBox from "./pages/LeskerBox";

function App() {

////////////////////////////////////////////////////////////////
    const url = 'wss://scaleserver.ucolick.org:8081/gshowd';
    const serviceName = "sca% -s cleanroom"
    const instrumentName = "CLEANROOM"
////////////////////////////////////////////////////////////////


    const commandArgs = `-c -jsonsingle -prefix -s ${serviceName} +attr`;
    const modifiedCommand = commandArgs.split(" ").join("&");

    return (
        <div className="App d-flex">
            <WebSocketProvider1 url={url} command={modifiedCommand}>
                <BrowserRouter basename='/cleanroom'>
                    <SideBar instrumentName={instrumentName} />
                    <div className='App'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/vacuum-gauge" element={<VacGauge/>} />
                            <Route path="/geist-monitors" element={<GeistMonitors/>} />
                            <Route path="/lesker-box" element={<LeskerBox />} />
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </WebSocketProvider1>
        </div>
    );
}

export default App;
