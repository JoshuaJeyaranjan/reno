import './styles/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'
import ServicePage from './pages/ServicePage/ServicePage.jsx'
import CategoryPageLoader from './pages/CategoryPage/CategoryPageLoader.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <ScrollToTop/>
    <Nav/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/services' element={<ServicePage />} />
      <Route path="/services/:slug" element={<CategoryPageLoader/>} />
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ThemeProvider>
  )
}
export default App
