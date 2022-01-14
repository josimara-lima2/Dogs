import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login/*" element={<Login/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
