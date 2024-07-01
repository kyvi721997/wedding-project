import 'react-h5-audio-player/lib/styles.css';
import HomePage from "src/pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "src/pages/WelcomePage";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<WelcomePage/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default App
