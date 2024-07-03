import './App.css'
import Form from './components/Form'
import Card from './components/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Form />} />
          <Route path='/' element={<Card/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
