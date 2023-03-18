// import Dragons from './dragons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header';
import Dragons from './dragons';
import Profile from './profile';
import Missions from './missions';
import Rockets from './Rockets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/myProfile" element={<Profile />} />
            <Route path="/dragons" element={<Dragons />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
