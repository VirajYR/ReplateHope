import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DonatePage from './Pages/DonatePage';
import MapComponent from './Components/MapComponent/MapComponent';
import Volunteer from './Components/volunteer/Volunteer';
import ShopSupport from './Components/ShopSupport/ShopSupport';
import ChatApp from './Components/Chat/ChatApp';
import FeedbackModal from './Components/FeedbackModal/FeedbackModal';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-food" element={<DonatePage />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/partner" element={<ShopSupport />} />
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/feedback" element={<FeedbackModal />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App