import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from './pages/Login';
import {Signup} from './pages/Signup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route component={NotFound}/> */}
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
