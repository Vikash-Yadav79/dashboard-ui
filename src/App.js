import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import ProductList from './ProductList';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flex: 1, flexDirection: 'column' }}>
        <Header />
        <ProductList />
      </div>
    </div>
  );
};

export default App;
