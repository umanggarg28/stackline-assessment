// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductPage from './components/ProductPage';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ProductPage />
      </div>
    </Provider>
  );
}

export default App;
