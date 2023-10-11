import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Menu, X } from 'lucide-react'
import { useLogoutMutation } from '../../slices/usersApiSlice'
import { logout } from '../../slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/logo.png'
import './Navbar.css'

const menuItems = [
  {
    name: 'View',
    href: '/view',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Pricing',
    href: '/waitlist',
  },
]

function Navbar() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { userInfo } = useSelector((state) => state.auth)

  const [logoutApiCall] = useLogoutMutation()
  const dispatch = useDispatch()

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className={
        color
          ? 'fixed top-0 z-10 w-full bg-[#110520] bg-opacity-80 overflow-x-hidden'
          : 'fixed top-0 z-10 w-full bg-transparent overflow-x-hidden'
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex space-x-2">
          <img src={logo} alt="logo" className="h-6 w-6" />
          <a href="/" className="text-white hover:text-[#6e25c0] font-bold">
            Metabees
          </a>
        </div>
        <div className="hidden ml-28 lg:block">
          <ul className="inline-flex nav-items space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                {window.location.pathname === '/' && item.name === 'Pricing' ? (
                  <span
                    className="text-sm font-semibold text-white hover:text-[#6e25c0] cursor-pointer"
                    onClick={() => {
                      window.scrollTo({
                        top: 1150,
                        behavior: 'smooth',
                      })
                    }}
                  >
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={
                      window.location.pathname === '/view' &&
                      item.name === 'View'
                        ? '/'
                        : item.href
                    }
                    className="text-sm font-semibold text-white hover:text-[#6e25c0]"
                  >
                    {window.location.pathname === '/view' &&
                    item.name === 'View'
                      ? 'Home'
                      : item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          {userInfo && (
            <div className="flex gap-3">
              <button
                type="button"
                className="navbar-login-btn"
                onClick={logoutHandler}
              >
                Log out
              </button>
              <button
                type="button"
                className="navbar-login-btn"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </button>
            </div>
          )}
          {!userInfo && (
            <div className="flex gap-3">
              <button
                type="button"
                className="navbar-login-btn"
                onClick={() => navigate('/login')}
              >
                Sign In
              </button>
              <button
                type="button"
                className="navbar-login-btn"
                onClick={() => navigate('/waitlist')}
              >
                Join Waitlist
              </button>
            </div>
          )}
        </div>

        <div className="lg:hidden">
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer stroke-white"
          />
        </div>
        {isMenuOpen && (
          <div className="relative inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <img src={logo} alt="logo" className="h-6 w-6" />
                    <span className="font-bold">Metabees</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                {userInfo && (
                  <div>
                    <button
                      type="button"
                      className="navbar-login-btn mt-5"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                    <button
                      type="button"
                      className="navbar-login-btn"
                      onClick={() => navigate('/dashboard')}
                    >
                      Dashboard
                    </button>
                  </div>
                )}
                {!userInfo && (
                  <div>
                    <button
                      type="button"
                      className="navbar-login-btn mt-5"
                      onClick={() => navigate('/waitlist')}
                    >
                      Join Waitlist
                    </button>
                    <button
                      type="button"
                      className="navbar-login-btn"
                      onClick={() => navigate('/login')}
                    >
                      Sign In
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
