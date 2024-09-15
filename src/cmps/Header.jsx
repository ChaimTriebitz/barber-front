import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/chagai.webp';

const links = [
   { name: 'Home', link: '/' },
   { name: 'Customer', link: '/customer' },
   { name: 'Appointments', link: '/appointments' },
]

export const Header = () => {
   return (
      <header className='header'>
         <img className='logo' src={logo} alt="company logo" />
         <nav className='nav'>
            {
               links.map(link =>
                  <NavLink
                     to={link.link}
                     className='link'
                     key={link.name}
                  >
                     {link.name}
                  </NavLink>
               )
            }
         </nav>
      </header>
   )
}
