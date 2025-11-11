import Home from "./pages/Home"
import TouristAttractionsDetails from "./pages/TouristAttractionsDetils"
import NavBar from "./components/NavBar"
import PersianNav from "./components/PersianNav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar2 from "./components/NavBar2"
import InstructorDetails from "./pages/InstructorDetails"
import TouristAttractions from "./pages/TouristAttractions"
import Doorm from "./pages/Doorm"
import Dorm2 from "./pages/Dorm2"
import DormDetails from "./pages/DormDetails"
import Course from "./pages/Course"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/touristAttractions" element={<TouristAttractions />} />
          <Route path="/touristAttractions/:name" element={<TouristAttractionsDetails />} />
          <Route path="/instructors/:name" element={<InstructorDetails />} />
          <Route path="/dorm" element={<Dorm2 />} />
          <Route path="/dorm/:place" element={<DormDetails />} />
          <Route path="/course" element={<Course />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
