import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './Containers/AddBooks'
const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <AddBooks />
      <Footer />
    </div>
  );
};

export default App;