import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Account } from './pages/AccountOverview';
import {Counselling} from './pages/Counselling';
import { Courses } from './pages/Courses';
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
          <Route path="/courses" element={<Courses />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Counselling" element={<Counselling />} />


          {/* <Route component={NotFound}/> */}
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
