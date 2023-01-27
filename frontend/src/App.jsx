import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login';
import MainPage from './pages/Main/Main';
import styled from 'styled-components';
import Register from './pages/Auth/Register';
import {Provider, useSelector} from 'react-redux'
import { reduxStore } from './redux/redux-store';
import ComponentWrapper from './components/ComponentWrapper';
const Wrapper = styled.div`
  background: linear-gradient(0deg, #E7E7E7, #FFFFFF)
`
const TIMEOUT = 1000;

function App() {
  return (
    <Provider store={reduxStore}>
      <Wrapper>
        <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
        <ComponentWrapper />
      </Wrapper>
    </Provider>
  );
}

export default App;
