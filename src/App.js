import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Regions from './pages/Regions';
import Home from './pages/Home';
import RegionDetails from './pages/RegionDetails';
import ProvinceDetails from './pages/ProvinceDetails';

function App() {

    return (
        <div className='app'>
            <BrowserRouter>

                <Navbar />

                <Routes>    
                    <Route path='/' element={<Home />} />
                    <Route path='/regions' element={<Regions />} />
                    <Route path='/regions/:region' element={<RegionDetails />} />
                    <Route path='/regions/:region/:province' element={<ProvinceDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
