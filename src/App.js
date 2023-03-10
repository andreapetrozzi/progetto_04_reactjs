import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav/MyNav.jsx";
import Home from "./components/Home/Home";
import FooterPart from "./components/FooterPart/FooterPart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultFeeds from "./components/Home/DefaultFeeds";
import NotFound from "./components/NotFound";
import Notifications from "./components/Notification/Notifications";
import Jobs from "./Jobs/Jobs";
import Company from "./Jobs/Company";


function App() {
  const [userProfile, setUserProfile] = useState({});

  return (
    <>
      <BrowserRouter>
        <MyNav userProfile={userProfile} setUserProfile={setUserProfile} />

        <Routes>
          <Route
            path="/"
            element={
              <DefaultFeeds
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            }
          />
          <Route path="/feed/post/:postId" element={<DefaultFeeds />} />
          <Route
            path="/profile/:id"
            element={
              <Home userProfile={userProfile} setUserProfile={setUserProfile} />
            }
          />
          <Route
            path="/notifications"
            element={
              <Notifications
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            }
          />
          <Route
            path="/jobs"
            element={
              <Jobs userProfile={userProfile} setUserProfile={setUserProfile} />
            }
          />
          <Route path="/:company" element={<Company />} />

          <Route path="*" element={<NotFound error="Page not found" />} />
        </Routes>
      </BrowserRouter>
      
      <FooterPart />
    </>
  );
}
export default App;


// npm i react-router-dom
// npm i bootstrap@4.6.0
// npm i react-bootstrap@1.6.4