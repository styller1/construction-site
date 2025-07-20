import './App.css';
import Header from './widgets/Header/Header.jsx';
import Footer from './widgets/Footer/Footer.jsx';
import Main from './pages/Main/Main.jsx';
import CardPages from './pages/CardPages/CardPages.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cards" element={<CardPages />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
