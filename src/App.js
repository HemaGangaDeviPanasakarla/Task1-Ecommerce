
import './App.css';
import React from 'react';
import Header from './Componets/header';
import Footer from './Componets/Footer';
import Products from './Componets/Product'
import Home from './Componets/Home'






    


// const App = () => {
//   const navigate = (id) => {
//     const pages = ['homepage', 'productpage', 'cartpage'];
//     pages.forEach(page => {
//       const element = document.getElementById(page);
//       if (element) {
//         element.style.display = page === id ? 'block' : 'none';
//       }
//     });
//   };

//   return (
//     <div>
//       <Header navigate={navigate} />
//       <div id="homepage" style={{ display: 'block' }}><Home /></div>
//       <div id="productpage" style={{ display: 'none' }}><ProductGrid /></div>
//       <div id="cartpage" style={{ display: 'none' }}><Cart /></div>
//       <Footer />
//     </div>
//   );
// };

// export default App;


function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Home  />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;