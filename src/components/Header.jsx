import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { animateNavActive, animateFadeIn } from '../utils/animations'
import './Header.css'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    // Animate nav on mount
    if (navRef.current) {
      setTimeout(() => animateFadeIn(navRef.current, 0.2), 300)
    }
  }, [])

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const handleNavClick = (e) => {
    animateNavActive(e.currentTarget)
  }

  return (
    <>
      {/* Floating Bottom Navigation */}
      <nav className="bottom-nav" ref={navRef}>
        <div className="nav-pill">
          <Link 
            to="/" 
            className={`nav-item ${isActive('/') ? 'active' : ''}`}
            onClick={handleNavClick}
            aria-label="Go to Home"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          <Link 
            to="/my-tickets" 
            className={`nav-item ${isActive('/my-tickets') || isActive('/ticket/') ? 'active' : ''}`}
            onClick={handleNavClick}
            aria-label="View My Tickets"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          <button 
            onClick={(e) => {
              handleNavClick(e)
              navigate('/scanner')
            }}
            className={`nav-item ${isActive('/scanner') ? 'active' : ''}`}
            aria-label="Open Check-in Scanner"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header
