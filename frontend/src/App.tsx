import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Auth from "./pages/Auth";
import ExplorePage from "./pages/ExplorePage";
import MessagePage from "./pages/MessagesPage";
import Brainrot from "./pages/BrainrotPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/messages" element={<MessagePage />} />
        <Route path="/brainrot" element={<Brainrot />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
