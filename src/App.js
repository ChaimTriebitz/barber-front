import { Footer, Header, Main, Msg } from './cmps'





function App() {

   document.title = 'Barber'

   return (
      <div className="App" >
         <Msg />
         <Header />
         <Main />
         <Footer />
      </div>
   )
}

export default App


