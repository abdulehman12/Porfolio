
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout'
import ContactForm from './components/pages/ContactForm'
import MasterOutlet from './components/layout/MasterOutlet';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterOutlet />} >
          <Route path="/"  element={<MainLayout />} />
          <Route path="contactForm" element={<ContactForm />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
