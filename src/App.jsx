import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Accommodation from './pages/Accommodation/Accommodation.jsx'
import CultureFood from './pages/CultureFood/CultureFood.jsx'
import Home from './pages/Home/Home.jsx'
import LocalPlaces from './pages/LocalPlaces/LocalPlaces.jsx'
import Program from './pages/Program/Program.jsx'
import Travel from './pages/Travel/Travel.jsx'
import Venue from './pages/Venue/Venue.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="venue" element={<Venue />} />
        <Route path="program" element={<Program />} />
        <Route path="travel" element={<Travel />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="culture-food" element={<CultureFood />} />
        <Route path="local-places" element={<LocalPlaces />} />
      </Route>
    </Routes>
  )
}
