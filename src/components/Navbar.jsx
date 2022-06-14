import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'

function Navbar() {

    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

  return (
    <footer className='navbar'>
      <nav className="navbarNav">
          <ul className="navbarListItems">
              <li className='navbarListItem' onClick={() => navigate('/')}>
                  <i><ExploreIcon fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width="36px" height="36px" style={{transition: '0.3s ease'}}  /></i> 
                    <p style={{transition: '0.3s ease'}} className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListName'}>Explore</p>
                  </li>
              <li className='navbarListItem' onClick={() => navigate('/offers')}>
                  <i><OfferIcon fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'} width="36px" height="36px" style={{transition: '0.3s ease'}}   /></i> 
                  <p style={{transition: '0.3s ease'}} className={pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListName'}>Offers</p>
                  </li>
              <li className='navbarListItem' onClick={() => navigate('/profile')}>
                  <i>< PersonOutlineIcon fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} width="36px" height="36px" style={{transition: '0.3s ease'}}   /></i> 
                  <p style={{transition: '0.3s ease'}} className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListName'}>Profile</p>
                  </li>
          </ul>
      </nav>
    </footer>
  )
}

export default Navbar