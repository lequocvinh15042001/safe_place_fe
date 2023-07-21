import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import {Home} from './pages/Home/screens/FrameScreen';
import {Login} from './pages/Login';
import {Signup} from './pages/Signup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />

          {/* <Route component={NotFound}/> */}
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
