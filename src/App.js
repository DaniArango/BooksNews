
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Form from './components/Form/Form'; 
import Footer from './components/Footer/Footer';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {

  return (
    <div className="App">
       <GlobalProvider>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} /> 
      </Routes>
      </BrowserRouter>
      <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
