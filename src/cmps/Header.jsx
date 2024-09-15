import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/chagai.webp';

const links = [
   { name: 'Home', link: '/' },
   { name: 'About', link: '/about' },
   { name: 'Resources', link: '/resources' },
   { name: 'News', link: '/news' },
   { name: 'Impact', link: '/impact' }
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
