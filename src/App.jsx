
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './pages/Home'
import SelectedRoomsDetails from './components/SelectedRoomsDetails'
import Hostel from './pages/Hostel'
import Events from './pages/Events'
import NotFound from './components/common/NotFound'
import Cities from './components/Cities'
import ScrollToTop from './components/ScrollToTop'
import Destination from './pages/Destination'
import Journey from './pages/Journey'
import WorkStation from './pages/WorkStation'
function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='hoste' element={<Hostel />} />
            <Route path='events' element={<Events />} />
            <Route path='hostel/:id' element={<SelectedRoomsDetails />} />
            <Route path='destination/cities/:id' element={<Cities />} />
            <Route path='destination' element={<Destination />} />
            <Route path='journey' element={<Journey />} />
            <Route path='workstation' element={<WorkStation />} />





          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
