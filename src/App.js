import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import SignUp from './pages/signup/SignUp'
import LogIn from './pages/login/LogIn'
import Home from './pages/home/Home'
import View from './pages/view/View'
import About from './pages/about/About'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import PasswordReset from './pages/PasswordReset/PasswordReset'
import Waitlist from './pages/waitlist/Waitlist'
import Contact from './pages/contact/Contact'
import Dashboard from './pages/dashboard/Dashboard'
import Upload from './pages/addproduct/Upload'
import ViewProduct from './pages/viewproduct/ViewProduct'
import Market from './pages/marketplace/Market'
import { UserContextProvider } from './utils/UserContext'
import Preview from './pages/previewobj/prev'

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/view" element={<View />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/upload" element={<Upload />} />
          <Route path="/viewproduct" element={<ViewProduct />} />
          <Route path="/marketplace" element={<Market />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/auth/reset-password/:id/:token" element={<PasswordReset />} />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </UserContextProvider>
  )
}

export default App

