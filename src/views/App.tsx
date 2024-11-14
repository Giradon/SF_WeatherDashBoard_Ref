import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** 페이지 컴포넌트 */
import HomePage from './Home';
import AboutPage from './About';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
