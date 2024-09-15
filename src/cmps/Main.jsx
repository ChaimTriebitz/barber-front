import { Route, Routes } from 'react-router-dom'
import { Appointments, Home } from '../pages'
import { Form } from '../pages/Form'

export const Main = () => {
   return (
      <main className='main cmp'>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/appointments' element={<Appointments />} />
            <Route path='/customer' element={< Form />} />
         </Routes>
      </main>
   )
}
