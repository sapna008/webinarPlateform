import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WebinarListing } from './pages/WebinarListing';
import { WebinarDetails } from './pages/WebinarDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebinarListing />} />
        <Route path="/webinar/:id" element={<WebinarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;