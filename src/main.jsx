
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Layout from './Layout/Layout.jsx';
import Dynamic from './components/Dynamic.jsx';
import Started from './components/Started.jsx';
import ProductPage from './components/ProductsPage.jsx';
import ProductDetail from './components/ProductDetail.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>

      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dynamic/:id' element={<Dynamic />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path="/started" element={<Started />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>

    </BrowserRouter>
  </StrictMode>
)
