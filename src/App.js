import { Msg } from './Msg'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'
import { Form } from './cmps'




function App() {

   document.title = 'Barber'

   return (
      <div className="App" >
         <Msg />
         <Form />
         {/* <Header /> */}
         <Main />
         <Footer />
      </div>
   )
}

export default App


