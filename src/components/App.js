// import Dragons from './dragons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header';
import Rockets from './Rockets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" />
            |
            <Route path="/myProfile" />
            {/* <Route path="/dragons" element={<Dragons />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
