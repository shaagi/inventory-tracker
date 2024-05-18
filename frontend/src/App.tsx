import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Update from './pages/Update'
import Add from './pages/Add'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/edit/:id' element={<Update/>}></Route>
      <Route path='/add' element={<Add />}></Route>
    </Routes>
  )
}

export default App
