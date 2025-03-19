import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import HomePage from "./pages/HomePage"
import PropertiesPage from "./pages/PropertiesPage"
import PropertyDetailsPage from "./pages/PropertyDetailsPage"
import ContactPage from "./pages/ContactPage"
import "./index.css"
import { ArrowRight, Check, MapPin, Phone, Mail } from "lucide-react"
import AboutPage from "./pages/AboutPage"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage/>}/>
          </Routes>

          <Contact/>
        </main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12  bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF5A3C]/10 rounded-full flex items-center justify-center text-primary">
                <Phone className="h-5 w-5 text-[#FF5A3C]" />
              </div>
              <div>
                <h4 className="font-medium">Phone Number</h4>
                <p className="text-gray-600">+1 (234) 567-8900</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF5A3C]/10 rounded-full flex items-center justify-center text-primary">
                <Mail className="h-5 text-[#FF5A3C] w-5" />
              </div>
              <div>
                <h4 className="font-medium">Email Address</h4>
                <p className="text-gray-600">info@villaagency.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF5A3C]/10 rounded-full flex items-center justify-center text-primary">
                <MapPin className="h-5  text-[#FF5A3C] w-5" />
              </div>
              <div>
                <h4 className="font-medium">Office Address</h4>
                <p className="text-gray-600">123 Villa Street, New York, NY</p>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

