import { Route, Routes } from 'react-router-dom'
import { About, Home, Impact, News, Resources } from './pages'

export const Main = () => {
   return (
      <main className='main cmp'>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/news' element={<News />} />
            <Route path='/impact' element={<Impact />} />
         </Routes>
      </main>
   )
}
