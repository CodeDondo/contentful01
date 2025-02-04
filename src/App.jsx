import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/footer/Footer'
import './App.scss'

function App() {

  return (
    <>
      <Header className="reset"> 
        <h1>Velkommen</h1>
      </Header>
      <Main> 
        <h2>Dette er main</h2>
      </Main>
      <Footer>
        <h3>Footer</h3>
        <a href="#">Test</a>
      </Footer>
    </>
  )
}

export default App
