import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Category } from './pages/category/category';
import { Header } from './components/header';
import { Footer } from './pages/footer/footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:category" element={<Category />} />
      </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;