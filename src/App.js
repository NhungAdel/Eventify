import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import WeddingPage from "./pages/WeddingPage";
import BirthdayPage from "./pages/BirthdayPage";
import ChildPage from "./pages/ChildPage";
import CompanyPage from "./pages/CompanyPage";
import TeamPage from "./pages/TeamPage";
import PhotobankPage from "./pages/PhotobankPage";
import ContactsPage from "./pages/ContactsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<EventPage />} path="/event" />
          <Route element={<WeddingPage />} path="/svatby" />
          <Route element={<BirthdayPage />} path="/narozeniny" />
          <Route element={<ChildPage />} path="/detske" />
          <Route element={<CompanyPage />} path="/Firemni" />
          <Route element={<TeamPage />} path="/teambuilding" />
          <Route element={<PhotobankPage />} path="/fotogalerie" />
          <Route element={<ContactsPage />} path="/kontakty" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
