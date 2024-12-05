import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Explore from "./components/Explore/Explore";
import Notifications from "./components/Notifications/Notifications";
import Profile from "./components/Profile/Profile";
import Shared from "./components/Shared/Shared";
import AI from "./components/AI/AI";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/shared" element={<Shared/>}/>
        <Route path="/ai" element={<AI/>}/>
      </Routes>
    </Router>
  );
};

export default App;
