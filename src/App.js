import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/cart" element={<Cart />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
