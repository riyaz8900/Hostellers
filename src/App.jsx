
import './App.css'
import Layout from './components/Layout'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './pages/Home'
import SelectedRoomsDetails from './components/SelectedRoomsDetails'
import Hostel from './pages/Hostel'
import Events from './pages/Events'
import NotFound from './components/common/NotFound'
import Cities from './components/Cities'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/'  element={<Layout/>}>
                <Route index element={<Home />} />
                <Route path='register' element={<Register/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='hostel' element={<Hostel/>}/>
                <Route path='events' element={<Events/>}/>
                <Route path='hostel/:id' element={<SelectedRoomsDetails/>}/>
                <Route path='destination/cities/:id' element={<Cities/>}/>


        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
