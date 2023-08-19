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

import { UserContextProvider } from './utils/UserContext'

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
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/login" element={<LogIn />} /> */}
          {/* <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
          {/* <Route
            path="/auth/reset-password/:id/:token"
            element={<PasswordReset />}
          /> */}
        </Routes>
      </Router>
    </UserContextProvider>
  )
}

export default App
