import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Update from './pages/Update'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/edit/:id' element={<Update/>}></Route>
    </Routes>
  )
}

export default App
